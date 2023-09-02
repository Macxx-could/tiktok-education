const app = getApp();
const {
    getUserProfile,
    setUserProfile
} = require('../../utils/user.js')
Page({
    data: {
        PageCur: '首页'
    },
    NavChange(e) {
        const pageCur = e.currentTarget.dataset.cur;
        if (pageCur === '个人中心' && !app.globalData.hasProfile) {
            getUserProfile().then(res => {
                setUserProfile(res)
                this.setData({
                    PageCur: pageCur
                });
            });
        } else {
            this.setData({
                PageCur: pageCur
            });
        }

    },
    onLoad: function (options) {},
    onShareAppMessage(option) {
        console.log('转发转发', option)
    },
});