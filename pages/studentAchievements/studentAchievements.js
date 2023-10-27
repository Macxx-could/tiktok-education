const {
  request
} = require('../../utils/request.js');
Page({
  data: {
    // 就业结果反馈
    resultFeedback: [],
    // 心得体会
    experience: [],
    // 毕业合照
    groupPhoto: [],
    // 学员画图速度表演秀
    performanceShow: [],
  },
  onLoad: function (options) {
    this.getExperience();
    this.getGroupPhoto();
    this.getPerformanceShow();
    this.getResultFeedback();
  },
  // 视频播放事件
  onVideoPlay(e) {
    const {
      target: {
        id
      }
    } = e // 获取元素id
    const video = tt.createVideoContext(id) // 创建实例
    video.requestFullScreen() // 进入全屏
  },
  // 获取就业结果反馈
  getResultFeedback() {
    const url = '/article/page'
    request(url, 'get', {
      dyMenuId: 12
    }).then(res => {
      const {
        code,
        rows
      } = res
      if (code === 200 && Array.isArray(rows) && rows.length > 0) {
        // 将数组中的元素3个3个一组，构成一个新的数组
        const list = []
        for (let i = 0; i < rows.length; i += 3) {
          list.push(rows.slice(i, i + 3))
        }
        this.setData({
          resultFeedback: list
        })
      }
    })
  },
  // 获取心得体会
  getExperience() {
    const url = '/article/page'
    request(url, 'get', {
      dyMenuId: 13
    }).then(res => {
      const {
        code,
        rows
      } = res
      if (code === 200 && Array.isArray(rows) && rows.length > 0) {
        // 将数组中的元素3个3个一组，构成一个新的数组
        const list = []
        for (let i = 0; i < rows.length; i += 3) {
          list.push(rows.slice(i, i + 3))
        }
        this.setData({
          experience: list
        })
      }
    })
  },
  // 获取毕业合照
  getGroupPhoto() {
    const url = '/article/page'
    request(url, 'get', {
      dyMenuId: 14
    }).then(res => {
      const {
        code,
        rows
      } = res
      if (code === 200 && Array.isArray(rows) && rows.length > 0) {
        // 将数组中的元素2个2个一组，构成一个新的数组
        const list = []
        for (let i = 0; i < rows.length; i += 2) {
          list.push(rows.slice(i, i + 2))
        }
        this.setData({
          groupPhoto: list
        })
      }
    })
  },
  // 获取学员画图表演秀
  getPerformanceShow() {
    const url = '/article/page'
    request(url, 'get', {
      dyMenuId: 15
    }).then(res => {
      const {
        code,
        rows
      } = res
      if (code === 200) {
        // 最多只显示4个元素
        const performanceShow = rows.slice(0, 4)
        this.setData({
          performanceShow
        })
      }
    })
  }
});