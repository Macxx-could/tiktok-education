const app = getApp();

Page({
    data: {
        PageCur: '首页'
    },
    NavChange(e) {
        const pageCUr = e.currentTarget.dataset.cur
        if(pageCUr === '个人中心'){
            // 判断用户是否进行了登录
        }
        this.setData({
            PageCur: pageCUr
        });
    },
    onLoad: function (options) {},
    onShareAppMessage(option) {
        console.log('转发转发', option)
    },
});