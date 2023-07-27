const app = getApp();

Page({
    data: {
        PageCur: '首页'
    },
    NavChange(e) {
        this.setData({
            PageCur: e.currentTarget.dataset.cur
        });
    },
    onLoad: function (options) {
    }
});