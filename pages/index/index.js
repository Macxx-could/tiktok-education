const app = getApp();

Page({
    data: {
        PageCur: '个人中心'
    },
    NavChange(e) {
        this.setData({
            PageCur: e.currentTarget.dataset.cur
        });
    },
    onLoad: function (options) {
    }
});