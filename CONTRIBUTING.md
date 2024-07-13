# コードの読み方/書き方

## 技術スタック

- 全体：
  - [Vite](https://vitejs.dev/)
  - [Vue.js](https://ja.vuejs.org/)
- ルーティング：
  - [Vue Router](https://router.vuejs.org/)
  - [Unplugin Vue Router](https://uvr.esm.is/introduction)
- スタイリング：
  - [sass](https://sass-lang.com/)
  - [Tailwind CSS](https://tailwindcss.com/)
- Markdown：
  - [marked](https://marked.js.org/)

拡張機能で`Vue`（`Volar`）、`TypeScript`、`Tailwind CSS`を入れるのを推奨。
あんまり複雑なことはしていないはずです。

## ファイル構成

```yml
vite.config.ts: Viteの設定ファイル。GitHub Pagesで良い感じにするために色々やってるのでコメントを参照。

src/:
  main.ts: エントリーポイント。ここからアプリケーションを起動する。
  App.vue: 全体のレイアウト。ヘッダーとかフッターとか。
  router.ts: ルーティングの設定ファイル。
  style.scss: 全体で使えるスタイル。

  assets/: 画像置き場。`.webp`形式を推奨。
  components/: コンポーネント置き場。
  contents/: Markdownファイル置き場。
  pages/: ページ置き場。`[...path].vue`は404ページ、`index.vue`はトップページ。
```

## Markdown独自拡張

### 見出し周り

自動的に一段下げられます。（`#` は `<h2>` 相当）

### `/kvtable`

行を2つ、かつ見出しの一番左に`/kvtable`を書くと、 **太字：** 内容 の形式で表を作成できます。
プロフィールページで使用。

```markdown
| /kvtable |          |
| -------- | -------- |
| 名前     | 応歌ラン |
| ...      | ...      |
```

## ページの作り方

基本的には既存ページをコピーすればいいはず。
ページのタイトルは`defineExpose`の`title`に書くと良い感じになります。
