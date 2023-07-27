const app = getApp();

Page({
    data: {
        PageCur: '粉丝福利'
    },
    NavChange(e) {
        this.setData({
            PageCur: e.currentTarget.dataset.cur
        });
    },
    onLoad: function (options) {
    }
});