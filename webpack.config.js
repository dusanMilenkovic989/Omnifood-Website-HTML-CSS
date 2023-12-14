const PATH = require('path')

module.exports = {                                          
    entry: './src/index.js',       
    output: {                                               
        path: PATH.resolve(__dirname, 'public'),    
        filename: 'bundle.js'                               
    },
    module: {
        rules: [{
            test: /\.js$/,                                  
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-runtime']
                }
            }
        }]
    },
    devServer: {
        static: {
            directory: PATH.resolve(__dirname, 'public')
        }
    },
    devtool: 'source-map'
}