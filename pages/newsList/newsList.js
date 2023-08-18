const { request } = require('../../utils/request.js');
Page({
    /**
     * 页面的初始数据
     */
    data: {
        // 公司对外合作动态/新闻
        news: [],
        currentPage: 1,
        pageSize: 10,
        total: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getList()
    },
    // 获取列表数据
    getList() {
        const url = '/article/page'
        request(url, 'get', {
            dyMenuId: 5,
            pageNum: this.data.currentPage,
            pageSize: this.data.pageSize
        }).then(res => {
            const { code, rows: news, total } = res
            if (code === 200) {
                this.setData({ news, total })
            }
        })
    },
    handlePageChange(event) {
        const page = event.detail.page;
        this.setData({ currentPage: page });
        // 在这里可以根据新的页码进行数据的加载或其他操作
        this.getList()
    }

})