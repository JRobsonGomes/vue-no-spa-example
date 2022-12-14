// Reference: https://jerickson.net/how-to-load-vue-components-non-spa-sites/
// webpack.config.js
const { dirname } = require("path");
// const VueLoaderPlugin = require("vue-loader/dist/plugin");
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: {
        "favorite-cat": "./loaders/helloLoader.js",
    },
    output: {
        filename: "bundle.js",
        path: __dirname,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            // this will apply to both plain `.js` files
            // AND `<script>` blocks in `.vue` files
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            // this will apply to both plain `.css` files
            // AND `<style>` blocks in `.vue` files
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
    ],
};
