const webpack = require('webpack');

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/festival-poster-creator/" : "/",
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
      }),
    ],
  },
};
