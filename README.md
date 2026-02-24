# Amy Yang — Portfolio (React + TypeScript)

作品集 React + TypeScript 專案，由原本的單一 HTML 轉換而來。

## 開發

```bash
npm install
npm run dev
```

瀏覽器打開 http://localhost:5173

## 建置

```bash
npm run build
```

產出在 `dist/`，可部署到任意靜態主機。

## 預覽建置結果

```bash
npm run preview
```

## 專案結構

- `src/App.tsx` — 根組件、Theme 同步
- `src/context/ThemeContext.tsx` — 深色/淺色主題
- `src/components/` — Nav、Hero、Projects、About、Contact、Footer、GrainCanvas
- `src/index.css` — 全域樣式（含彩球動畫、主題變數）
