const {
  login
} = require('./utils/user.js')

App({
  onLaunch: function () {
    // 登录
    login()
      .then(res => {
        console.log('登录成功', res)
      })
      .catch(errMsg => {
        console.log('登录失败', errMsg)
      })
  },
  globalData: {
    isLogin: false, // 用户是否已经登录
  }
});