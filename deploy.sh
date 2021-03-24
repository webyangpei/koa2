#! /bin/bash

echo "拉取最新的代码"
git checkout HEAD
git clean -f
git pull origin master
echo -e "\033[32m代码拉取完成...\033[0m"


echo "开始部署服务端..."
rm -rf node_modules
echo "开始安装项目依赖..."
npm i
echo -e "\033[32m依赖安装完成\033[0m"
pm2 delete koa2
pm2 start npm --name "koa2" -- run start
echo -e "\033[32mkoa2部署完成！\033[0m"




