---
description: inputfollow.js を gitflow でリリースする（release/vX.Y.Z 作成、バージョン更新、demo バンドル再生成、master/develop マージ、npm 公開まで）。「リリース」「バージョン上げ」の依頼でも使用。
---

`skill` ツールで `release` スキル（`.opencode/skills/release/SKILL.md`）をロードし、記載された手順を最後まで実行してください。

リリースバージョンは $ARGUMENTS を確認してください。指定がない場合は `git log --oneline master..develop` の差分を確認してユーザーに提案し、承認を得てから進めてください。作業開始前には現在ブランチが `develop` で、`git status` がクリーンであることを必ず確認してください。
