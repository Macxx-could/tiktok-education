// pages/newsList/newsList.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 公司对外合作动态/新闻
    environment: [
      { name: "广东校区环境一角" },
      { name: "广东校区环境一角" },
      { name: "广东校区环境一角" },
      { name: "广东校区环境一角" },
      { name: "广东校区环境一角" },
      { name: "广东校区环境一角" },
      { name: "广东校区环境一角" },
      { name: "广东校区环境一角" },
      { name: "广东校区环境一角" },
      { name: "广东校区环境一角" },
      { name: "广东校区环境一角" },
    ],
    currentPage: 1,
    pageSize: 10,
    total: 100,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  handlePageChange(event) {
    const page = event.detail.page;
    this.setData({
      currentPage: page,
    });
    // 在这里可以根据新的页码进行数据的加载或其他操作
  },
  /**
   * 跳转到环境详情页面
   * @param {*} e
   */
  jumpToDetail(e) {
    const url = `/pages/environmentalDetails/environmentalDetails`;
    tt.navigateTo({ url });
  },
});
