const { request } = require('../../utils/request.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        detail: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const { id } = options
        this.getDetail(id)
    },
    // 获取详情
    getDetail(id) {
        const url = '/article/get/one'
        request(url, 'get', { id }).then(res => {
            const { code, data: detail } = res
            if (code === 200) {
                this.setData({ detail })
            }
        })
    }
})