const { request } = require('../../utils/request.js');
Page({
  data: {
    // 招聘信息
    infos: [],
    // 行业发展前景
    developmentProspects: [],
    // 公司对外合作动态/新闻
    news: [],
  },
  onLoad: function (options) {
    this.getNews()
    this.getDevelopmentProspects()
    this.getInfo()
  },
  // 获取招聘信息
  getInfo() {
    const url = '/article/page'
    request(url, 'get', { dyMenuId: 18 }).then(res => {
      const { code, rows } = res
      if (code === 200) {
        // 最多只显示4个元素
        const infos = rows.slice(0, 2)
        this.setData({ infos })
      }
    })
  },
  // 获取学员画图表演秀
  getNews() {
    const url = '/article/page'
    request(url, 'get', { dyMenuId: 19 }).then(res => {
      const { code, rows } = res
      if (code === 200) {
        // 最多只显示4个元素
        const news = rows.slice(0, 4)
        this.setData({ news })
      }
    })
  },
  // 获取行业发展前景
  getDevelopmentProspects() {
    const url = '/article/page'
    request(url, 'get', { dyMenuId: 6 }).then(res => {
      const { code, rows } = res
      if (code === 200) {
        // 最多只显示4个元素
        const developmentProspects = rows.slice(0, 4)
        this.setData({ developmentProspects })
      }
    })
  },
  /**
   * 行业动态-点击更多按钮跳转到列表页面
   * @param {} e
   */
  clickMoreText(e) {
    const url = `/pages/industryOutlookList/industryOutlookList`;
    tt.navigateTo({ url });
  },
});
