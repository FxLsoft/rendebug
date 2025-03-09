let path =  require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    // 上下文环境
    // context: '',
    // 生成source map，不包含列信息
    devServer: {
        proxy: {
            "/": "http://127.0.0.1:3000"
        }
    },
    devtool: 'cheap-source-map',
    // 入口文件
    entry: {
        // 有一个名叫main的chunks
        // main: './src/scripts/main.js',
        // a: './src/scripts/a.js'
        app: './src/main.js',
    },
    output: {
        // 生成目录的路径
        path: path.resolve(__dirname, 'dist'),
        /* 多个入口生成多个文件 
            [name]: 文件名，上面对象的key
            [hash]: 每次打包统一的hash
            [chunkhash]: 每个打包出来的文件的md5值
        */
        filename: 'js/[name]-bundle.js',
        // 引用路径
        // publicPath: 'https://cdn.com/',
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
        }),
        // 这个插件是必须的，他将你定义的其他loader应用到.vue文件中
        // new VueLoaderPlugin()
        // 将js自动加到html中
        // new htmlWebpackPlugin({
        //     filename: 'index-[hash].html',
        //     // 因为默认上下文是config文件的目录，所以可以直接写index.html
        //     template: 'index.html',
        //     // 可以设置变量，被html中引用到
        //     title: 'webpack学习',
        //     // 这个可以压缩html
        //     // minify: {},
        //     // 不插入
        //     // inject: false,
        //     chunks: ['main', 'a'],
        // }),
        // 将js自动加到html中
        // new htmlWebpackPlugin({
        //     filename: 'a-[hash].html',
        //     // 因为默认上下文是config文件的目录，所以可以直接写index.html
        //     template: 'index.html',
        //     // 可以设置变量，被html中引用到
        //     title: 'a.html',
        //     // 这个可以压缩html
        //     // minify: {},
        //     // 不插入
        //     // inject: false,
        //     // 指定应用的chunk
        //     chunks: ['a'],
        //     // 排除的chunk
        //     // excludeChunks: [],
        // }),
    ],
    module: {
        loaders: [
            {
                // npm install --save-dev babel-loader babel-core
                test: /\.js$/,
                loader: 'babel-loader',
                // 正则表达式，或绝对路径
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
                // 指定参数
                query: {
                    // npm install --save-dev babel-preset-latest
                    // 引用插件，会兼容最新属性
                    // 遇到一个坑，webpack如果时全局安装，这个latest会去全局目录找，不再当前目录找
                    presets: ['latest'],
                    plugins: [
                        ["import", {
                            "libraryName": "iview",
                            "libraryDirectory": "src/components"
                        }]
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        query: {
                            // 引入进来的css用多少loader处理
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({
                                    browsers: ['last 5 versions']
                                }),
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({
                                    browsers: ['last 5 versions']
                                }),
                            ]
                        }
                    },
                    'less-loader',
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            // 解决引入iview css字体文件loader问题
            {
                test: /\.(svg|ttf|eot|woff)\??.*$/,
                loader: "url-loader?limit=10000"
            }
        ],
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.common.js',
            '@iview': 'iview/dist/iview.min',
            "@utils": path.resolve(__dirname, "src/utils/index.js"),
        },
    },
}