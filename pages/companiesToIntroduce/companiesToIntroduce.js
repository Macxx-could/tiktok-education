// pages/companiesToIntroduce/companiesToIntroduce.js 
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 企业宣传片列表
        videoList: [
            {title: '广州校区'},
            {title: '中山东区校区'},
            {title: '中山南区校区'},
        ],
        // 公司简介
        introduction: {
            content: '公司简介文案'.repeat(100)
        },
        // 企业荣誉
        honor: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    animationFinish(e) {
        console.log(e.detail);
    },
    transition(e) {
        console.log(e.detail);
    }
})