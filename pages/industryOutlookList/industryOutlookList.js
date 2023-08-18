const { request } = require('../../utils/request.js');
Page({
  data: {
    developmentProspects: [],
    currentPage: 1,
    pageSize: 10,
    total: 0,
  },
  onLoad: function (options) {
    this.getDevelopmentProspects()
  },
  // 获取行业发展前景
  getDevelopmentProspects() {
    const url = '/article/page'
    request(url, 'get', {
      dyMenuId: 6,
      pageNum: this.data.currentPage,
      pageSize: this.data.pageSize
    }).then(res => {
      const { code, rows: developmentProspects, total } = res
      if (code === 200) {
        this.setData({ developmentProspects, total })
      }
    })
  },
  handlePageChange(event) {
    const page = event.detail.page;
    this.setData({ currentPage: page });
    // 在这里可以根据新的页码进行数据的加载或其他操作
    this.getDevelopmentProspects()
  },
  /**
   * 跳转到就业前景详情页面
   * @param {*} e
   */
  jumpToDetail(e) {
    const { currentTarget: { dataset: { id } } } = e
    const url = `/pages/industryProspectDetails/industryProspectDetails?id=${id}`;
    tt.navigateTo({ url });
  },
});
