module.exports = {
    entry: "./js/main.js",
    output: {
        publicPath: "http://localhost:8080/js/",
        path: "./js/",
        filename: "bundle.js"
    },
    module: {
        loaders: [ 
            { test: /\.scss$/, exclude: /(node_modules)/, loaders: ["style", "css", "sass"] },
            { test: /\.js$/, exclude: /(node_modules)/, loader: 'babel', query:{ presets:['react']} }
        ]
    }
};