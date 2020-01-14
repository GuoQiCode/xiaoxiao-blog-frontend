const webpack = require('webpack');
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets'
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery",
        "windows.jQuery": "jquery"
      })
    ],
  },

}