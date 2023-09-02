const app = getApp()
Component({
  /**
   * 组件的初始数据
   */
  data: {
    user: {
      nickName: '用户昵称',
      avatarUrl: ''
    }
  },
  // 生命周期
  lifetimes: {
    attached() {
      console.log('xxx')
      const {
        userInfo
      } = app.globalData
      this.setData({
        user: userInfo
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {}
});