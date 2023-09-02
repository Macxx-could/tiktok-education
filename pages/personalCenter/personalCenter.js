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
  methods: {
    handleIm(e) {
      console.log(e);
      if (!e.detail.errNo) {
        this.setData({
          result: e.detail.errMsg,
        });
        tt.showToast({
          title: "success",
        });
      } else {
        this.setData({
          result: e.detail.errMsg,
        });
        tt.showToast({
          title: this.data.result,
          icon: "none",
        });
      }
    },
  }
});