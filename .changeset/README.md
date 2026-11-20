# Changesets

This directory is managed by [changesets](https://github.com/changesets/changesets).

Add a changeset for every user-facing change:

```bash
npx changeset
```

The release branch runs `npx changeset version` to bump `package.json` from the
collected changesets. `CHANGELOG.md` / `CHANGELOG.ja.md` are still written by
hand at release time (see `.opencode/skills/release/SKILL.md`).
