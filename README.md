# 東北大学 日本語教育プログラム - レベル3
## Tohoku University Japanese Language Program - Level 3

このプロジェクトは、東北大学の日本語教育プログラム（初中級レベル・レベル3）のスライド教材をまとめた学習サイトです。

## 📚 プロジェクト概要

学生が各レッスンのスライド教材に簡単にアクセスできるように設計されたWebサイトです。

### 含まれるレッスン

**第1課 (Lesson 1)**
- ① L1-1: 第1課 パート1
- ② L1-2: 第1課 パート2
- ③ L2-1: 第2課 パート1
- ④ L2-2: 第2課 パート2
- ⑤ L3-1: 第3課 パート1
- ⑥ L3-2: 第3課 パート2

## 🚀 使い方

### ローカルでの実行

1. このディレクトリをWebサーバーで提供します：
   ```bash
   # Pythonを使用する場合
   python3 -m http.server 8000
   
   # Node.jsを使用する場合
   npx http-server
   ```

2. ブラウザで開く：
   ```
   http://localhost:8000
   ```

### ファイル構成

```
webapp/
├── index.html      # メインページ（レッスン一覧）
├── lesson.html     # レッスン表示ページ
├── styles.css      # スタイルシート
├── lesson.js       # JavaScript（レッスン機能）
└── README.md       # このファイル
```

## 🎨 機能

### メインページ (index.html)
- レッスンカード形式で全レッスンを表示
- 各レッスンへの直接リンク
- レスポンシブデザイン（モバイル対応）
- 東北大学のブランドカラーを使用

### レッスンページ (lesson.html)
- Geniallyスライドの埋め込み表示
- 全画面表示機能
- 新しいタブで開く機能
- 戻るボタンでメインページに戻る

## 🎯 技術仕様

- **HTML5**: セマンティックなマークアップ
- **CSS3**: モダンなグラデーションとアニメーション
- **JavaScript**: バニラJS（フレームワーク不要）
- **レスポンシブ**: モバイル、タブレット、デスクトップに対応

## 📱 対応ブラウザ

- Chrome / Edge (最新版)
- Firefox (最新版)
- Safari (最新版)
- モバイルブラウザ

## 🔗 外部リンク

各レッスンのGeniallyスライドは以下のURLから直接アクセスできます：

1. L1-1: https://view.genially.com/692515d6f021a8539ca7ac08
2. L1-2: https://view.genially.com/69259b0592682ae90be9956a
3. L2-1: https://view.genially.com/6926dc0131d78c8e66a4d1bc
4. L2-2: https://view.genially.com/6926ddbc31d78c8e66a52328
5. L3-1: https://view.genially.com/6926df11369dc90b3bab08e0
6. L3-2: https://view.genially.com/6926e02cee2ad5958762e4ef

## 📝 カスタマイズ

### 新しいレッスンの追加

1. `index.html`に新しいレッスンカードを追加
2. `lesson.js`の`lessons`オブジェクトに新しいエントリを追加

### スタイルの変更

`styles.css`でカラースキーム、フォント、レイアウトをカスタマイズできます。

## 🤝 貢献

このプロジェクトは東北大学の日本語教育プログラム用に作成されました。

## 📄 ライセンス

© 東北大学 日本語教育プログラム
