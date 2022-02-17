module.exports = {
    //关闭语法检查
    lintOnSave: false,
    configureWebpack:{
      resolve: {
        alias:{
          'assets' : '@/assets',
          'common' : '@/common',
          'components' : '@/components',
          'views' : '@/views',
        }
      }
    }
}