module.exports = {
  lintOnSave: false,

  publicPath: '/weather/',

  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/styles/main.scss";`
      }
    }
  }
}
