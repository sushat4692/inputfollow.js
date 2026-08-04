# AGENTS.md

AIエージェント（opencode など）がこのリポジトリで作業するためのガイドです。

## プロジェクト概要

- **inputfollow.js**: フォームのバリデーション・入力制限（Input Limit）を提供する TypeScript 製のフロントエンドライブラリ（jQuery 版からのスタンドアロン版）
- バージョン管理: gitflow ブランチ戦略
- 対象: ブラウザ（ES6+）、UMD/ESM の両方でビルド
- 依存: `zod`（バリデーションスキーマの検証に `zod/mini` を使用）

## ブランチ戦略（gitflow）

- `master`: リリース済みコードのみ（リリースタグ `v0.0.x` を持つ）
- `develop`: 開発の統合ブランチ。新機能開発は必ずここからブランチを切る
- `feature/*`: 機能開発ブランチ（`develop` から分岐し、完了後 `develop` にマージ）
- `release/v0.0.x`: リリース準備ブランチ（`develop` から分岐し、`master` と `develop` にマージ）
- `hotfix/*`: 緊急修正ブランチ（`master` から分岐）

作業開始時は必ず最新の `develop` から新ブランチを切ること。`feature/*` ブランチから直接 `master` へマージしないこと。

リリース作業（release/vX.Y.Z の作成〜npm 公開）は `.opencode/skills/release/SKILL.md` の手順に従うこと。**demo/js/inputfollow*.js はリリース時に必ず `npm run build && npm run make:demo:js` で再生成してコミットする**（version banner と最新コードを追従させるため）。

## ディレクトリ構成

```
src/             … 実装コード
  index.ts       … エントリポイント（InputFollow 本体と型の export）
  types.ts       … 型定義と zod スキーマ（InitialParam, Rule など）
  convert/       … 入力値の変換処理（Code, Number）
  validate/      … バリデーション処理（Required, Email, Number, Code, Equal）
  model/Element.ts … フィールド要素の生成・管理
  utils/Tag.ts   … タグ生成ユーティリティ
demo/            … デモサイト（scss から css を生成、dist の JS をコピー）
docs/            … api-extractor / api-documenter 生成の API ドキュメント（自動生成物）
types/           … ビルド生成の型定義（自動生成物）
dist/            … ビルド生成物（gitignore 済み）
```

## 自動生成物（確認・編集不要）

- `docs/`, `types/` は git 管理下にあるがビルド生成物。内容の確認・手編集は不要（API ドキュメントの差分をレビュー対象にしない）
- 変更が必要な場合は生成元（`src/` の TSDoc コメントや型定義）を修正し、`npm run make:doc`（docs/）や `npm run build`（types/）で再生成する
- `dist/`, `temp/`, `.rollup.cache/`, `tsconfig.tsbuildinfo` は gitignore 済みの生成物なのでコミットしない

## ビルド・スクリプト

| コマンド | 内容 |
| --- | --- |
| `npm run build` | Rollup でビルド（dist/ と types/ を生成） |
| `npm run demo` | デモサイトを serve で起動 |
| `npm run make` | build + demo ビルド + API ドキュメント生成 |
| `npm run make:demo` | build + demo ビルド |
| `npm run make:doc` | api-extractor + api-documenter で docs/ を生成 |
| `npm run lint` | oxlint で lint |
| `npm run format` | oxfmt で整形 |
| `npm run format:check` | oxfmt で整形差分チェック（CI 用） |
| `npm test` | Vitest で全テスト（unit + browser）を実行 |
| `npm run test:unit` | jsdom ユニット/統合テストのみ実行 |
| `npm run test:browser` | 実ブラウザ（chromium）のブラウザ統合テストのみ実行 |
| `npm run test:watch` | テストを watch モードで実行 |

- 型チェックは `tsc --noEmit`（tsconfig.json に project references 設定があるため `-b` 指定に注意）または `npm run build` で検証できる
- lint: `npm run lint`（oxlint、設定は `.oxlintrc.json`）
- 整形: `npm run format`（oxfmt、設定は `.oxfmtrc.json`。`demo/**` は整形対象外）

## テスト

- `test/unit/`: jsdom 環境のユニット/統合テスト（バリデーション・変換・型・InputFollow 全体）
- `test/browser/`: Vitest Browser Mode（playwright プロバイダ・chromium・headless）による実ブラウザ統合テスト
- 新機能・バグ修正時は該当するユニットテストと、実ブラウザで確認すべき挙動はブラウザテストを追加する
- ブラウザテストの初回実行には `npx playwright install chromium` が必要
- 設定は `vitest.config.ts`（`projects` で unit / browser の2構成）

## コーディング規約

- TypeScript、oxfmt 設定: `singleQuote: true` / `semi: false` / `printWidth: 80` / `tabWidth: 4`（`.oxfmtrc.json` 参照）
- 未使用変数は `_` プレフィックスで許容（`.oxlintrc.json` の no-unused-vars 設定による）
- 公開 API には `@public` などの TSDoc コメントを付け、型の変更時は `npm run make:doc` で docs/ を更新する
- エクスポートは `src/index.ts` から行う（`InputFollow` 関数と型）

## 実装の注意点

- `InputFollow(formEl, params)` は `<form>` 要素に対して動作し、string 指定時は `document.querySelector` で解決する
- エラー状態は `errors` プロキシで監視され、`on_success` / `on_error` / `on_validate` / `on_submit` / `on_failed` のコールバックが呼ばれる
- オプションのデフォルト値: `error_class: 'has-error'`, `valid_class: 'is-valid'` など（`src/index.ts` の `arrangedParams` 参照）
- バリデーション種別: `required` / `email` / `number` / `code` / `equal`（`["equal", "対象フィールド名"]`）
- 入力制限種別: `number` / `code`
- 複数フィールド連携: `mode`（`or` / `and`）と `with`、条件付きバリデーション `if`（`target` 指定）に対応
- 破壊的変更は避け、オプションは追加で拡張する。バージョンは gitflow の release ブランチで `package.json` の version を上げる
