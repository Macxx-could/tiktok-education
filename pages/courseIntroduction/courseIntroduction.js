const { request } = require('../../utils/request.js');
Page({
  data: {
    courses: [],
    videoItem: {}
  },
  onLoad: function (options) {
    this.getCourses();
    this.getVideo();
  },
  // 获取课程列表
  getCourses() {
    const url = '/article/page'
    request(url, 'get', { dyMenuId: 16 }).then(res => {
      const { code, rows: courses } = res
      if (code === 200) {
        this.setData({ courses })
      }
    })
  },
  getVideo() {
    const url = '/article/page'
    request(url, 'get', { dyMenuId: 17 }).then(res => {
      const { code, rows } = res
      if (code === 200) {
        const videoItem = rows[0] || {}
        this.setData({ videoItem })
      }
    })
  }
});