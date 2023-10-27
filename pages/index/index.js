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
    onLoad(query) {
        console.log(query)
        if (query.from === "sharebuttonabc") {
          // do something...
        }
      },
     onShareAppMessage(option) {
        console.log('转发转发', option)
       
        return {
            title:'biaot', // 这是要转发的小程序标题
            desc: "这是默认的转发文案，用户可以直接发送，也可以在发布器内修改",
            path: "/pages/index/index?from=sharebuttonabc&otherkey=othervalue", // ?后面的参数会在转发页面打开时传入onLoad方法
            imageUrl: "https://e.com/e.png", // 支持本地或远程图片，默认是小程序 icon
            templateId: "这是开发者后台设置的分享素材模板id",
            success() {
                console.log(
                    "转发发布器已调起，并不意味着用户转发成功，微头条不提供这个时机的回调"
                );
            },
            fail() {
                console.log("转发发布器调起失败");
            },
        };
    },
});