#! /bin/bash

echo "开始安装commitizen与cz-conventional-changelog..."
npm install -g commitizen npm install cz-conventional-changelog --save-dev
echo -e "\033[32mcommitizen与cz-conventional-changelog安装完成...\033[0m"

echo "开始配置git cz命令..."
commitizen init cz-conventional-changelog --save-dev --save-exact --force
echo -e "\033[32配置完成，package.json已更新...\033[0m"

echo "开始安装commitlint与husky..."
npm i --save-dev @commitlint/{cli,config-conventional} husky
echo -e "\033[32commitlint与husky安装完成...\033[0m"

echo "开始安装standard-version..."
touch .npmrc
echo registry=https://registry.npm.taobao.org > .npmrc
npm i --save-dev standard-version
echo -e "\033[32standard-version安装完成...\033[0m"





