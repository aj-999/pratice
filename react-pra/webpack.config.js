const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
module.exports = {
    // 入口
    entry: "./src/index.js",
    // 出口
    output: {
        path: __dirname + "/dist", //打包后的存放路径
        filename: "[name].[hash:8].bundle.js" // 打包后输出的文件名
    },
    mode: "development",
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },
    //loader
    module: {
        rules: [
            {
                // 匹配规则
                test: /\.jsx?$/,
                // exclude: path.join(__dirname, 'node_modules'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                        plugins: [
                            ['@babel/plugin-proposal-decorators', { legacy: true }],
                            ['@babel/plugin-proposal-class-properties', { loose: true }],
                        ]
                    }
                }],
            },
            {
                test: /\.css?$/,
                // exclude: path.join(__dirname, 'node_modules'),
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less?$/,
                // exclude: path.join(__dirname, 'node_modules'),
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
        ]
    },
    //服务器
    devServer: {
        port: 8080,
        // open: true,
        // host:'0.0.0.0',  //外部可访问
    },
    //plugin
    plugins: [
        // 生成一个html文件
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html'),
            title: 'React'
        }),
        new CleanWebpackPlugin(), //自动删除webpack里的dist目录
    ]
}