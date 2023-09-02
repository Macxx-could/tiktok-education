/**
 * 用户登录
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

function getUserProfile() {}

module.exports = {
    login,
    getUserProfile
}