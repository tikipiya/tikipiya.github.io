# MyProf

## 環境要件
- Node.js 18.0.0以上
- npm 9.0.0以上
- PowerShell 5.1以上

## セットアップ手順

1. リポジトリをクローン
```powershell
git clone [リポジトリのURL]
cd MyProf
cd myprof  # プロジェクトのルートディレクトリに移動
```

2. 依存関係のインストール
```powershell
npm install
```

3. 開発サーバーの起動
```powershell
npm run dev
```

4. 本番ビルド
```powershell
npm run build
npm start
```

## プロジェクト構造
```
MyProf/
├── myprof/           # プロジェクトのルートディレクトリ
│   ├── package.json  # 依存関係の定義
│   ├── src/         # ソースコード
│   └── ...
├── README.md
└── ...
```

## PowerShellでの実行時の注意点
- PowerShellの実行ポリシーが制限されている場合は、以下のコマンドで一時的に変更できます：
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

- スクリプトの実行時にエラーが発生する場合は、管理者権限でPowerShellを実行してください。

## 主な機能
- Next.js 15.3.2
- React 19
- TypeScript
- Tailwind CSS

## 注意事項
- 開発時は`npm run dev`コマンドを使用してください
- 本番環境では`npm run build`後に`npm start`を実行してください
- PowerShellでの実行時は、コマンドプロンプトと異なり、`&&`の代わりに`;`を使用してコマンドを連結できます
- 必ず`myprof`ディレクトリ内でnpmコマンドを実行してください 