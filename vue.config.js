module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/PersonalityTest/'
    : '/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Personality traits test'
        return args
      })
  }
}
