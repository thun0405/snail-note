# ベースイメージ
FROM node:18

# 作業ディレクトリの作成
WORKDIR /app

# 依存パッケージをインストールする
COPY package.json package-lock.json ./
RUN npm install

# アプリケーションコードをコピーする
COPY . .

# アプリケーションをビルドする
RUN npm run build

# アプリケーションの起動
CMD ["npm", "start"]

