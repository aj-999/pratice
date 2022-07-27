# 从零搭建webpapck react

## webpack
webpack可以看做模块打包机：它做的事情分析你的项目结构，找到所有的模块依赖，把一些不被浏览器支持的特性（如预处理语言，TS，ES6，JSX等）转换位打包合适的格式供浏览器使用

 ### 配置文件
  >在根目录创建webpack.config.js文件，并写入如下配置信息（也可以使用任意文件名，但在运行webpack时需指定`--config`参数）

 * entry：入口
 >默认为main.js

 * output：打包后的位置
    * path: 打包后的文件存放的路径
    * filename: 打包后输出的文件名
        * `[name]`：以入口名作为文件名
        * `[hash]`：添加hash值
    * publicPath: 打包后index.html代码中文件引用前缀（如：src,href等）
    >一般用于打包后图片等资源文件的路径问题

    ```js
        module.exports = {
            //__dirname是一个nodejs的global变量，指代当前执行文件所在的文件夹
            entry:  __dirname + "/src/index.js",//唯一入口文件
            output: {
                path: __dirname + "/dist",//打包后的文件存放的路径
                filename: "[name].[hash:8].bundle.js"//打包后输出的文件名
            }
        }
    ```

 * devServer：测试服务器
  * contentBase： 服务器路径（默认：项目的根目录）
    * port: 指定端口（默认：8080）
    * inline: 是否自动刷新（默认：true）
    * open: 是否自动打开浏览器（默认：false）
    * historyApiFallback: 对于单页面程序，浏览器的histroy可以设置成html5 history api或者hash
    * proxy: 服务器代理（一般用于解决ajax跨域问题）
        > webpack-dev-server的实现方法其实是对http-proxy-middleware的封装

    ```js
        proxy:{
            "/api":{
                target:"http://api.douban.com/v2/movie",//代理目标服务器
                changeOrigin: true,
                pathRewrite: {'^/api' : ''}, //替换部分路径
            }
        }
    ```

* mode：模式
    - production（默认）
    - development
    - none

* resolve
    * alias     别名
    * mainFields 优先采用package.json中哪份代码
    * extensions 默认扩展名
    
    ```js
        resolve:{
            alias:{
                '@':path.join(__dirname,'src'),
            }
        },
    ```

* loader: 在module.rules(Array)
    - test：一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）
    - use(Object|Array)
        * loader(String)：loader的名称
        * options(Object):配置loader参数
    - loader(String|Array)
    >PS：loader为use.loader的简写，可以支持多个loader(处理顺序从后往前)
    - include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
    - query：为loaders提供额外的设置选项（可选）

### babel-loader
> Babel其实是一个编译JavaScript的平台，它可以编译代码帮你达到以下目的：

* balel能做什么
  - ES6、ES7...转ES5
  - 让你能使用基于JavaScript进行了拓展的语言，比如React的JSX；
* babel-loader依赖模块
  * babel-core: 核心功能
  * babel-preset-env：解析标准化的ES语法
  * babel-plugin-transform-runtime：解析未标准化的ES语法（如：async,await）
  * babel-preset-react: 解析JSX

  >注意babel-loader与babel-core的版本问题

### url-loader

> 一个对图片等文件进行优化的加载器，可以解决图片引用路径的问题，并可以根据limit设置把小图片一dataURI的方式保存，减少http请求
* limit: 文件大小
    - 小于等于limit，则以dataURI方式显示
    - 大于limit，则调用file-loader处理
* name：文件名规则
    - 默认值：文件哈希。
    - `[path]`表示输出文件的相对路径与当前文件相对路径相同，打包后文件中引用文件的路径也会加上这个相对路径
    - `[name].[ext]`则表示输出文件的名字和扩展名与当前相同

* file-loader：解决图片引用路径的问题（img和background）
> url-loader内置file-loader的功能

```js
    {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '../dist/img/[name].[hash:7].[ext]'
        }
    }
```

* plugin：插件 

 > loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务，可以处理loader处理不了的事情。插件的范围包括：打包优化、资源管理和注入环境变量。

### HtmlWebpackPlugin
 这个插件的作用是依据一个html文件作为模板模板，在出口目录自动生成一个引用你打包后的JS的新文件（生成多个页面要多次调用new HtmlWebpackPlugin()）

* template:模板路径
* filename:输出文件名（默认：index.html）
* title:设置html文件的title属性
    > 在模板title标签中写入`<%= htmlWebpackPlugin.options.title %>`
* hash:是否自动往引入的css或js中添加hash（默认：false）
* chunks：提取公共部分文件

```javascript
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      title:'react'
    })
  ]
```
### 安装依赖
* webpack
 > npm i webpack webpack-cli webpack-dev-server -D
* react
 > npm i react react-dom react-router react-router-dom
* babel
 > babel-loader
 > @babel/core
 > @babel/preset-react
 > @babel/plugin-proposal-class-properties 插件会将类属性编译
 > @babel/plugin-proposal-decorators插件会支持类的装饰器语法, 包括类装饰器, 属性装饰器, 方法装饰器
 
 * 样式
 > style-loader
 > css-loader
 > less-loader

 * 插件
 > html-webpack-plugin({template:根html路径})  生成一个html文件
 > clean-webpack-plugin //自动删除webpack里的dist目录






