# Linux 入門電子書

這個版本已整理成適合 GitHub Pages 上線的靜態網站。

## 檔案

- `index.html`：首頁與閱讀器結構
- `styles.css`：版面與樣式
- `script.js`：章節內容與互動邏輯
- `favicon.svg`：網站 favicon
- `social-cover.svg`：分享用封面圖
- `site.webmanifest`：網站安裝資訊
- `.nojekyll`：讓 GitHub Pages 直接以靜態檔案方式發布

## GitHub Pages 上線方式

1. 建立 GitHub repository，將此資料夾內容上傳。
2. 到 repository 的 `Settings` -> `Pages`。
3. 在 `Build and deployment` 中選擇從分支部署。
4. Branch 選擇 `main`，資料夾選擇 `/ (root)`。
5. 儲存後等待 GitHub Pages 發布完成。

## 建議

- 若之後要自訂網址，可在 repository 設定中加入 custom domain。
- 目前已附上 `social-cover.svg` 作為分享圖；若要相容更多社群平台，可再額外輸出 PNG 版本。
