# YouTube Subtitle Collecter

YouTube動画の字幕をダウンロードし、テキストファイルに変換するCLIツールです。yt-dlpを使用して複数の形式での字幕ダウンロードに対応しています。

## 機能

- YouTube動画から字幕をダウンロード
- 複数の出力形式に対応 (txt, srt, vtt, json)
- 自動生成字幕のダウンロード
- バッチ処理による複数動画の一括ダウンロード
- 利用可能な字幕言語の一覧表示

## 前提条件

- Node.js 18.0.0以上
- yt-dlpがインストールされていること

### yt-dlpのインストール

```bash
# pipを使用
pip install yt-dlp

# macOSでHomebrewを使用
brew install yt-dlp

# Windowsでwingetを使用
winget install yt-dlp
```

## インストール

```bash
# リポジトリをクローン
git clone https://github.com/oboroge0/YTSubtitleCollecter.git
cd YTSubtitleCollecter

# 依存関係をインストール
npm install

# ビルド
npm run build

# グローバルにインストール（必須）
npm link
```

## 使用方法

`npm link`実行後、`yt-subtitle`コマンドが使用可能になります。

### 基本的な使用方法

```bash
# 英語字幕をテキストファイルとしてダウンロード
yt-subtitle download "https://www.youtube.com/watch?v=VIDEO_ID"

# 日本語字幕をダウンロード
yt-subtitle download "https://www.youtube.com/watch?v=VIDEO_ID" -l ja

# SRT形式でダウンロード
yt-subtitle download "https://www.youtube.com/watch?v=VIDEO_ID" -f srt

# 自動生成字幕をダウンロード
yt-subtitle download "https://www.youtube.com/watch?v=VIDEO_ID" -a

# カスタム出力ディレクトリを指定
yt-subtitle download "https://www.youtube.com/watch?v=VIDEO_ID" -o ./my-subtitles
```

### 利用可能な字幕を確認

```bash
yt-subtitle download "https://www.youtube.com/watch?v=VIDEO_ID" --list
```

### バッチ処理

URLリストファイルを作成:
```
# urls.txt
https://www.youtube.com/watch?v=VIDEO_ID1
https://www.youtube.com/watch?v=VIDEO_ID2
https://www.youtube.com/watch?v=VIDEO_ID3
```

バッチダウンロードを実行:
```bash
yt-subtitle batch urls.txt -l ja -f txt
```

### yt-dlpの確認

```bash
yt-subtitle check
```

## コマンドオプション

### `download`コマンド

| オプション | 短縮形 | 説明 | デフォルト |
|-----------|--------|------|-----------|
| --language | -l | 字幕の言語コード (例: en, ja, ko) | en |
| --format | -f | 出力形式 (txt, srt, vtt, json) | txt |
| --output | -o | 出力ディレクトリ | ./downloads |
| --auto | -a | 自動生成字幕をダウンロード | false |
| --list | | 利用可能な字幕を表示（ダウンロードなし） | false |

### `batch`コマンド

| オプション | 短縮形 | 説明 | デフォルト |
|-----------|--------|------|-----------|
| --language | -l | 字幕の言語コード | en |
| --format | -f | 出力形式 | txt |
| --output | -o | 出力ディレクトリ | ./downloads |
| --auto | -a | 自動生成字幕をダウンロード | false |

## 出力形式

- **txt**: プレーンテキスト（タイムスタンプなし）
- **srt**: SubRip字幕形式
- **vtt**: WebVTT字幕形式
- **json**: JSON形式

## 開発

```bash
# 開発モードで実行
npm run dev -- download "URL"

# TypeScriptのビルド
npm run build

# Lintの実行
npm run lint

# Lintの自動修正
npm run lint:fix
```

## トラブルシューティング

### yt-dlpが見つからない

```bash
yt-subtitle check
```
を実行して、yt-dlpがインストールされているか確認してください。

### 字幕が見つからない

- `--list`オプションで利用可能な字幕を確認
- `-a`オプションで自動生成字幕を試す
- 動画に字幕が用意されていない可能性があります

## 法的事項

このツールを使用する前に、[DISCLAIMER.md](./DISCLAIMER.md)をお読みください。

## ライセンス

MIT License - 詳細は[LICENSE](./LICENSE)ファイルを参照してください。

## 免責事項

- このツールは教育目的で作成されています
- ダウンロードした字幕の著作権は元の権利者に帰属します
- YouTube利用規約および著作権法を遵守してください
- 商用利用や再配布は適切な許可なく行わないでください