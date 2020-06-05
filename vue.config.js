module.exports = {
  publicPath: "./",
  pages: {
    index: {
      entry: "demo/main.js",
      template: "demo/public/index.html",
      filename: "index.html"
    }
  },
  css: { extract: false },
  chainWebpack: config => {
    config.module
      .rule("js")
      .include.add("/masonry/")
      .end()
      .use("babel")
      .loader("babel-loader");
  }
};
