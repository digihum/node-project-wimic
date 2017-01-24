const path = require('path');

module.exports = {
    entry: "./src/index.js",
    devtool: "inline-source-map",
    output: {
        path: path.join(__dirname, 'public'),
        filename: "site.js"
    },
    module: {
        loaders: [
          { test: /\.hbs$/, loader: "handlebars-loader" }
        ]
    },
    externals: {
        "jquery": "jQuery"
    }
};
