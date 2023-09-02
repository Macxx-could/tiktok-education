const app = getApp()
/**
 * 调用tt.login接口进行登录
 * tt.getUserProfile内置了tt.login
 */
function login() {
    return new Promise((resolve, reject) => {
        // 发起登录请求
        tt.login({
            success: (res) => {
                resolve(res)
            },
            fail: (res) => {
                const {
                    errMsg,
                    errNo
                } = res
                let desc = `服务端错误:${errNo}`
                switch (errMsg) {
                    case 'login:fail network unavailable':
                        desc = '网络不可用'
                        break;
                    case 'login:fail feature is not supported in app':
                        desc = '当前宿主不支持'
                        break;
                    case 'login:fail app in background':
                        desc = '当前处于后台'
                        break;
                    case 'login:fail host login fail':
                        desc = '宿主登录失败'
                        break;
                    default:
                        break;
                }
                tt.showToast({
                    title: desc,
                    icon: 'fail'
                });
                reject(res.errMsg)
            },
        });
    })
}

/**
 * 通过tt.getUserProfile获取用户数据
 */
function getUserProfile() {
    return new Promise((resolve, reject) => {
        tt.getUserProfile({
            force: true, // 用户未登录时，强制登录
            success: (res) => {
                resolve(res)
            },
            fail: (res) => {
                reject(res)
            },
        });
    })
}

/**
 * 将用户数据存放到全局变量中
 * @param {object} data 
 */
function setUserProfile(data) {
    app.globalData.userProfile = data
    const {
        userInfo
    } = data
    app.globalData.userInfo = userInfo
    app.globalData.hasProfile = true
}

module.exports = {
    login,
    getUserProfile,
    setUserProfile
}