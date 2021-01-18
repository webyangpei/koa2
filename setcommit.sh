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
echo registry=https://npm.corp.kuaishou.com > .npmrc
npm i --save-dev standard-version
echo -e "\033[32standard-version安装完成...\033[0m"

touch .versionrc.js

echo 'module.exports = {
	// 文件大标题
	header: "# 发布日志",
	preset: "@es/conventional-changelog-eshop",
	// 根据 commit 的 type 取的标题
	types: {
		init: {type: "init", section: "初始化工程"},
		feat: {type: "feat", section: "新功能"},
		fix: {type: "fix", section: "问题修复"},
		release: {type: "release", section: "版本发布"},
		refactor: {type: "refactor", section: "代码重构"},
		docs: {type: "docs", section: "更新文档" },
		style: {type: "style", section: "更新样式" },
		perf: {type: "perf", section: "优化性能" },
		chore: {type: "chore", section: "改变构建流程、或者增加辅助工具、依赖库等" },
	},
	// standard-version 自动打tag发布时，生成的 commit 内容格式
	releaseCommitMessageFormat: "release: 发布 v{{currentTag}}",
	// git commit 自定义地址格式
	commitUrlFormat: "{{host}}/{{owner}}/{{repository}}/-/commit/{{hash}}",
	// git compare 自定义地址格式
	compareUrlFormat: "{{host}}/{{owner}}/{{repository}}/-/compare/{{previousTag}}...{{currentTag}}"
}'  > .versionrc.js

echo "开始安装@es/conventional-changelog-eshop..."
npm i -D @es/conventional-changelog-eshop
echo -e "\033[32@es/conventional-changelog-eshop安装完成...\033[0m"




