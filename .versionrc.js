module.exports = {
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
}
