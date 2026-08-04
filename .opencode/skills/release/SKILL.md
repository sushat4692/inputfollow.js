---
name: release
description: inputfollow.js の gitflow リリース手順。release/vX.Y.Z ブランチ作成、バージョン更新、demo バンドル再生成、master/develop マージ、CI npm publish の監視までを実施する。「リリース」「release」「バージョン上げ」「v0.x.x でリリース」「npm に公開」などの依頼で使用する。
---

# inputfollow.js gitflow リリース手順

このスキルは inputfollow.js リポジトリの gitflow リリース作業を実行するための手順書です。**demo バンドルの再生成は忘れやすいため必ず実施してください。**

## 前提

- ブランチ戦略: `master`（リリース済みのみ）/ `develop`（開発統合）/ `feature/*` / `release/*` / `hotfix/*`
- npm publish は **OIDC（Trusted Publisher）** で認証されるためトークンは不要
- タグ `vX.Y.Z` は CI（publish ワークフロー）が自動作成するため**手動で打たない**
- TypeScript 7 / Babel 8 はエコシステム非対応のため採用しない（typescript は 5.x 系、babel は削除済み）

## 手順

1. **準備確認**
   - `git status` がクリーンで、現在 `develop` にいることを確認
   - `git log --oneline develop..master` が空（master の内容が develop に反映済み）であること
   - リリース対象の差分を `git log --oneline master..develop` で確認し、ユーザーに内容を提示する

2. **release ブランチ作成**
   - `git checkout develop && git checkout -b release/vX.Y.Z`

3. **バージョン更新**
   - `npm version X.Y.Z --no-git-tag-version`（package.json と package-lock.json のみ更新）
   - コミットメッセージは過去の慣習に合わせ **`Updated version number`**

4. **⚠️ demo バンドル再生成（必須・忘れやすい）**
   - `npm run build && npm run make:demo:js`
   - `demo/js/inputfollow.js` / `.map` / `.min.js` が version banner と最新コードに追従する
   - 差分が出たらコミットに含める

5. **検証**
   - `npm test`（unit + browser 全件）
   - `npm run lint` / `npm run format:check`
   - `npm run make:doc` を実行し docs/ に差分がないか確認（公開 API 変更がある場合はコミットに含める）

6. **master へマージ・公開**
   - `git checkout master && git merge --no-ff release/vX.Y.Z -m "Merge branch 'release/vX.Y.Z'"`
   - `git push origin master`（CI の publish ワークフローが npm publish とタグ自動作成を実行）

7. **develop へマージ・後片付け**
   - `git checkout develop && git merge --no-ff release/vX.Y.Z -m "Merge branch 'release/vX.Y.Z' into develop"`
   - `git branch -d release/vX.Y.Z`

8. **公開確認**
   - `gh run list --workflow="Publish To npm" --limit 1` で実行 ID を取得 → `gh run watch <run-id> --exit-status`
   - `npm view inputfollow.js version` が新バージョンになっていること
   - `git fetch origin --tags` で `vX.Y.Z` タグが存在すること

## 注意点

- `demo/js/inputfollow*.js` は gitignore 対象外の**コミットするビルド生成物**。再生成を忘れるとデモサイトが古いコードのままになる
- `types/tsdoc-metadata.json` は追跡しない（gitignore 済み）。ビルドで消えても復元不要
- release ブランチから直接 feature 開発をしない
- `gh workflow run` での発火にはリポジトリの admin 権限が必要。権限エラーが出たら `gh auth switch` で `sushat4692` アカウントに切り替える
- `npm run demo` は serve（http-server ではない）
