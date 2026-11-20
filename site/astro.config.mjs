import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightTypeDoc from 'starlight-typedoc'

// GitHub Pages: https://sushat4692.github.io/inputfollow.js/
const typeDocOptions = {
    entryPoints: ['../src/index.ts'],
    tsconfig: '../tsconfig.json',
    typeDoc: {
        excludePrivate: true,
        excludeInternal: true,
        entryFileName: 'index',
    },
}

export default defineConfig({
    site: 'https://sushat4692.github.io',
    base: '/inputfollow.js',
    integrations: [
        starlight({
            title: 'inputfollow.js',
            description:
                'A lightweight TypeScript library for form validation and input limiting.',
            // English is served from `/`, Japanese from `/ja/`.
            defaultLocale: 'root',
            locales: {
                root: { label: 'English', lang: 'en' },
                ja: { label: '日本語', lang: 'ja' },
            },
            social: [
                {
                    icon: 'github',
                    label: 'GitHub',
                    href: 'https://github.com/sushat4692/inputfollow.js',
                },
            ],
            editLink: {
                baseUrl:
                    'https://github.com/sushat4692/inputfollow.js/edit/develop/site/',
            },
            customCss: ['./src/styles/custom.css'],
            sidebar: [
                {
                    label: 'Guides',
                    translations: { ja: 'ガイド' },
                    items: [
                        {
                            label: 'Getting Started',
                            translations: { ja: 'はじめに' },
                            link: '/guides/getting-started/',
                        },
                        {
                            label: 'Rules & Options',
                            translations: { ja: 'ルールとオプション' },
                            link: '/guides/rules/',
                        },
                        {
                            label: 'Validation',
                            translations: { ja: 'バリデーション' },
                            link: '/guides/validation/',
                        },
                        {
                            label: 'Input Limiting',
                            translations: { ja: '入力制限' },
                            link: '/guides/limitations/',
                        },
                        {
                            label: 'Events & State',
                            translations: { ja: 'イベントと状態' },
                            link: '/guides/events/',
                        },
                    ],
                },
                {
                    label: 'Changelog',
                    translations: { ja: '更新履歴' },
                    link: '/changelog/',
                },
                {
                    label: 'API Reference',
                    translations: { ja: 'API リファレンス' },
                    items: [
                        { autogenerate: { directory: 'api', collapsed: true } },
                    ],
                },
            ],
            plugins: [
                starlightTypeDoc({ ...typeDocOptions, output: 'api' }),
                // The API pages are generated per locale so that sidebar links
                // resolve under `/ja/` as well. The generated content is English.
                starlightTypeDoc({ ...typeDocOptions, output: 'ja/api' }),
            ],
        }),
    ],
})
