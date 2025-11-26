# 🌐 学生向けサイト公開ガイド / Deployment Guide

## ✅ 現在の状況

コードは既にGitHubにアップロードされています！
- **GitHubリポジトリ**: https://github.com/yukosawabe0119-jpg/level3
- **ブランチ**: main
- **ファイル**: すべて正常にコミット・プッシュ済み

---

## 🚀 学生に公開する方法（3つのオプション）

### 【推奨】オプション1: GitHub Pages（無料・簡単・安定）

#### 手順：
1. GitHubリポジトリにアクセス
   - https://github.com/yukosawabe0119-jpg/level3

2. 「Settings」タブをクリック

3. 左メニューから「Pages」を選択

4. 「Source」セクションで設定：
   - **Branch**: `main` を選択
   - **Folder**: `/ (root)` を選択
   - 「Save」をクリック

5. 数分待つと、公開URLが表示されます：
   - **予想URL**: `https://yukosawabe0119-jpg.github.io/level3/`

#### メリット：
✅ 完全無料
✅ SSL/HTTPS対応（安全）
✅ 安定性が高い
✅ 設定が簡単
✅ 自動更新（Gitにpushするだけ）

#### 注意点：
- 公開まで3-5分かかる場合があります
- リポジトリがPublicである必要があります

---

### オプション2: Netlify（無料・高速）

#### 手順：
1. Netlify (https://www.netlify.com/) にアクセス
2. 「Sign up」でGitHubアカウントで登録
3. 「Import from Git」をクリック
4. GitHubリポジトリ `yukosawabe0119-jpg/level3` を選択
5. 設定：
   - **Branch to deploy**: main
   - **Build command**: （空欄でOK）
   - **Publish directory**: `.` または `/`
6. 「Deploy site」をクリック

#### 公開URL：
- 自動生成: `https://random-name-123456.netlify.app`
- カスタムドメインも設定可能

#### メリット：
✅ 完全無料
✅ 非常に高速
✅ 自動デプロイ
✅ カスタムドメイン対応
✅ フォーム機能など拡張可能

---

### オプション3: Vercel（無料・最速）

#### 手順：
1. Vercel (https://vercel.com/) にアクセス
2. 「Sign Up」でGitHubアカウントで登録
3. 「Import Project」をクリック
4. GitHubリポジトリ `yukosawabe0119-jpg/level3` を選択
5. 「Deploy」をクリック

#### 公開URL：
- 自動生成: `https://level3-xxxx.vercel.app`

#### メリット：
✅ 完全無料
✅ 最速のデプロイ
✅ 自動デプロイ
✅ カスタムドメイン対応

---

## 📱 公開後の確認事項

公開が完了したら、以下を確認してください：

### ✅ チェックリスト
- [ ] すべてのレッスンリンクが動作する
- [ ] L1-1からL3-2まで6つすべてのスライドが表示される
- [ ] モバイル（スマホ）で正常に表示される
- [ ] タブレットで正常に表示される
- [ ] PC（デスクトップ）で正常に表示される
- [ ] 全画面表示機能が動作する

---

## 🔄 更新方法

コードを更新したい場合：

```bash
# ファイルを編集後
git add .
git commit -m "更新内容の説明"
git push origin main
```

GitHub Pages / Netlify / Vercel は自動的に更新されます！

---

## 📊 アクセス統計（オプション）

学生の利用状況を把握したい場合：

### Google Analytics
1. Google Analytics (https://analytics.google.com/) でアカウント作成
2. トラッキングコードを取得
3. `index.html` の `<head>` 内に追加

### 簡易的な方法
- GitHub Insightsでリポジトリの閲覧数を確認可能

---

## 🆘 トラブルシューティング

### 問題: ページが表示されない
**解決策**:
- リポジトリがPublicか確認
- GitHub Pages設定でブランチが`main`か確認
- 3-5分待ってから再度アクセス

### 問題: スライドが表示されない
**解決策**:
- ブラウザのキャッシュをクリア
- 別のブラウザで試す
- Genially側のURLが有効か確認

### 問題: モバイルで表示が崩れる
**解決策**:
- レスポンシブデザインは既に実装済み
- キャッシュクリア後に再確認

---

## 📞 サポート

質問がある場合：
- GitHubのIssuesタブで質問を投稿
- README.mdに詳細なドキュメントがあります

---

## 🎓 学生への共有方法

公開URLが決まったら、以下の方法で学生に共有：

1. **大学のLMS（学習管理システム）**に投稿
2. **メール**でURL配信
3. **QRコード**を生成して印刷物に掲載
4. **授業のスライド**に掲載

### 学生向けメッセージ例：

```
東北大学 日本語教育プログラム（レベル3）の学習サイトです。

🌐 URL: [公開URLをここに記入]

このサイトでは、6つのインタラクティブなスライド教材にアクセスできます。
最初の画面で名前を入力してご使用ください。
同じ教材を複数回使う場合は、名前を変更してください（例：John-1, John-2）。

授業の予習・復習にご活用ください！
```

---

## ✨ まとめ

**最も簡単な方法**: GitHub Pages（推奨）
- 設定: 2分
- 費用: 無料
- URL: `https://yukosawabe0119-jpg.github.io/level3/`

すぐに学生たちが使えるようになります！🎉
