function request(url, method, data, config = {}) {
    // 请求头
    const baseUrl = 'http://159.75.37.49:8602/interface/dy/web'
    // 拼接请求地址
    url = `${baseUrl}${url}`
    // 获取请求方法 - 默认是get请求
    method = method || 'get'
    // 获取配置
    const { dataType, responseType } = config
    // 默认配置
    const BASE_CONFIG = {
        url,
        method,
        data,
        timeout: 15000, // 15s超时
        dataType,
        responseType
    }
    const CONFIG = Object.assign(BASE_CONFIG, config)
    return new Promise((resolve, reject) => {
        CONFIG.success = function (res) {
            resolve(res.data)
        }
        CONFIG.fail = function (err) {
            reject(err)
        }
        tt.request(CONFIG)
    })
}

module.exports = {
    request
}