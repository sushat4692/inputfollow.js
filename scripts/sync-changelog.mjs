/**
 * Sync the root changelog files into the Starlight content directory.
 *
 * `CHANGELOG.md` / `CHANGELOG.ja.md` are the source of truth. The generated
 * pages under `site/src/content/docs/` are gitignored.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises'

const root = new URL('../', import.meta.url)

const entries = [
    {
        source: 'CHANGELOG.md',
        target: 'site/src/content/docs/changelog.md',
        title: 'Changelog',
        description: 'Release history of inputfollow.js',
    },
    {
        source: 'CHANGELOG.ja.md',
        target: 'site/src/content/docs/ja/changelog.md',
        title: '更新履歴',
        description: 'inputfollow.js のリリース履歴',
    },
]

for (const entry of entries) {
    const raw = await readFile(new URL(entry.source, root), 'utf8')
    const body = raw.replace(/^#\s+.+\n/, '').replace(/^\n+/, '')
    const frontmatter = `---\ntitle: ${entry.title}\ndescription: ${entry.description}\n---\n\n`
    const target = new URL(entry.target, root)

    await mkdir(new URL('.', target), { recursive: true })
    await writeFile(target, `${frontmatter}${body}`)

    console.log(`Generated ${entry.target}`)
}
