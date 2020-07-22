module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: ['last 5 versions']      //必须设置支持的浏览器才会自动添加添加浏览器兼容
    }),
    // require('postcss-pxtorem')({
    //   rootValue: 75, //结果为：设计稿元素尺寸/75，比如元素宽750px,最终页面会换算成 10rem
    //   propList: ['*']
    // })
  ]
}