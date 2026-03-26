#!/bin/bash
# 一键推送到 GitHub，Netlify 自动更新网站
cd "$(dirname "$0")"
if [[ -z $(git status -s) ]]; then echo "✅ 没有新更改"; exit 0; fi
echo "📝 有以下文件更新:"; git status -s; echo ""
read -p "确认推送到 GitHub？(y/n): " c
if [[ $c == "y" ]]; then
  git add . && git commit -m "更新数据 $(date '+%Y-%m-%d')" && git push origin main
  echo "✅ 推送完成！Netlify 将在 1-2 分钟内自动部署。"
else echo "❌ 取消"; fi