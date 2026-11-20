# 更新履歴

このプロジェクトの主な変更点をまとめています。

形式は [Keep a Changelog](https://keepachangelog.com/ja/1.1.0/) に基づき、
[セマンティック バージョニング](https://semver.org/lang/ja/) に従います。

## [未リリース]

## [1.1.0] - 2026-11-20

### 追加

- Astro + Starlight によるドキュメントサイト（英語 / 日本語、ライブデモ、API リファレンス）。
- カスタムバリデータ（`type: 'custom'` と `validate` 関数）。
- バリデーション制約（`min` / `max`、`minlength` / `maxlength`、`pattern`）。
- グループルール（`name` に配列を渡して複数フィールドをまとめて検証）。
- 非同期バリデータ（`async: true` と `validateAsync()`）。送信は完了まで保留。
- 任意のスタイルシート（`inputfollow.js/inputfollow.css`）。
- `messages` オプションによるデフォルトエラーメッセージ。
- `if.target` の boolean 条件（チェックボックス / ラジオの状態、テキストの入力有無）。
- エラーメッセージの表示先を指定する `message_target`。
- `validate()` が `{ valid, errors, errorFields }` を返すように。
- インスタンス API `hasError()` / `clear()` / `destroy()`。
- `initial_valid_view` / `novalidate` / `ignore_missing_fields` オプション。
- エラー時の `aria-invalid` / `aria-describedby`、メッセージの `role="alert"` / `aria-live`。
- `FieldController` / `InputFollowInstance` / `ValidationResult` / `CustomValidator` 型と公開 API の TSDoc。
- `exports` マップと `.cjs` の CommonJS ビルド。

### 変更

- `number` バリデーションが `Infinity`・16進数・指数表記・空白を拒否するように。
- 同名フィールドの重複ルールは警告を出して無視するように。
- ブラウザ標準バリデーションを `novalidate` で既定無効化。
- 初回操作前は `is-valid` クラスを付与しないように（従来の動作は `initial_valid_view: true`）。
- フォームの `reset` 時にエラー状態を自動クリア。

### 削除

- api-documenter による Markdown ドキュメント（`docs/`）。
- スタンドアロンのデモページ（`demo/`）。デモはドキュメントサイト内に移行。
- `@microsoft/api-extractor` への依存（API ドキュメントは TypeDoc で生成）。

## [1.0.0] - 2026-08-04

### 変更

- ビルド / デモのツールを刷新（Babel を削除し、デモ配信を `serve` に変更）。
- リリース自動化を追加し、デモバンドルを再生成。

## [0.2.0] - 2026-08-04

### 変更

- `zod/mini` を自前のバリデータに置き換え。

### 修正

- zod の実用的なメールアドレス正規表現を採用。

## [0.1.0] - 2026-08-04

### 追加

- ひらがな・カタカナ・かな・半角カタカナ・英字・英数字のバリデーション。
- Vitest（unit / browser）と GitHub Actions CI。

### 修正

- バリデーションの不具合と `or` モードの挙動。

### 変更

- ESLint / Prettier を oxlint / oxfmt に置き換え。

## それ以前のリリース

`v0.0.11` 以前は
[タグ](https://github.com/sushat4692/inputfollow.js/tags) と
[リリース](https://github.com/sushat4692/inputfollow.js/releases) を参照してください。

[未リリース]: https://github.com/sushat4692/inputfollow.js/compare/v1.1.0...develop
[1.1.0]: https://github.com/sushat4692/inputfollow.js/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/sushat4692/inputfollow.js/releases/tag/v1.0.0
[0.2.0]: https://github.com/sushat4692/inputfollow.js/releases/tag/v0.2.0
[0.1.0]: https://github.com/sushat4692/inputfollow.js/releases/tag/v0.1.0
