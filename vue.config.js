const { defineConfig } = require("@vue/cli-service");
const Timestamp = new Date().getTime();
module.exports = defineConfig({
	productionSourceMap: false,
	transpileDependencies: true,
	lintOnSave: false,
	devServer: {
		historyApiFallback: true,
		allowedHosts: "all",
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
	},
	configureWebpack: {
		// webpack 配置
		output: {
			// 输出重构 打包编译后的 文件名称 【模块名称.版本号.时间戳】
			filename: `static/js/[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
			chunkFilename: `static/js/[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
		},
	},
});
