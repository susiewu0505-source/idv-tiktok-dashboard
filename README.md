# 第五人格 TikTok 数据看板

## 文件说明
```
idv-dashboard/
├── index.html       ← 看板主体（不含数据）
├── videos.json      ← 视频数据（460条）
├── trends.json      ← 趋势数据（每周更新）
├── update.sh        ← 一键推送脚本
└── bookmarklet.js   ← Creative Center 一键抓取书签
```

## 首次部署（GitHub + Netlify）

```bash
cd ~/Desktop/idv-dashboard
git init
git remote add origin https://github.com/susiewu0505-source/idv-tiktok-dashboard.git
git add .
git commit -m "初始化"
git push -u origin main
```

然后在 Netlify → Add new site → Import from GitHub → 选此仓库。

## 日常更新流程

### 更新趋势数据（每周，5分钟）
1. 打开 Creative Center 趋势页面（需登录）
2. 点击书签「📊 IDV更新趋势」→ 自动下载 trends.json
3. 替换本文件夹里的 trends.json
4. 运行 `bash update.sh`

### 更新视频数据（每月）
1. 发给 Claude「帮我更新视频数据」
2. 替换 videos.json
3. 运行 `bash update.sh`

## 添加书签（一次）
1. 浏览器新建书签
2. 名称：`📊 IDV更新趋势`
3. 网址：复制 bookmarklet.js 里的全部内容
