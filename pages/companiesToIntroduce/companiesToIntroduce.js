const { request } = require('../../utils/request.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 企业宣传片列表
    videoList: [],
    // 公司简介
    introduction: {},
    // 企业荣誉
    honor: [],
    // 校园环境
    environment: [],
    // 下载列表
    downloadList: [],
    // 文件路径
    imageSrc: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getVideoList()   // 获取企业宣传片列表
    this.getIntroduction() // 获取公司简介
    this.getHonorList() // 获取企业荣誉列表
    this.getEnvironment() // 获取校园环境
    this.getDownloadList() // 获取下载列表
    const envInfo = tt.getEnvInfoSync()
    console.log(envInfo)
    this.setData({ envInfo });
  },
  // 获取下载列表
  getDownloadList() {
    const url = '/article/page'
    request(url, 'get', { dyMenuId: 21 }).then(res => {
      const { code, rows: downloadList } = res
      if (code === 200) {
        this.setData({ downloadList })
      }
    })
  },
  // 文件下载
  downloadFile(e) {
    const { currentTarget: { dataset: { file } } } = e
    tt.downloadFile({
      url: file,
      header: {
        "content-type": "application/json",
      },
      success: (res) => {
        const filePath = res.tempFilePath
        tt.openDocument({
          filePath: filePath,
          success: function (res) {
            console.log("打开文档成功")
          },
        })
      },
      fail: (res) => {
        console.log("downloadFile fail", res);
        tt.showToast({
          title: res.errMsg,
          icon: "none",
        });
      },
      complete: (res) => {
        console.log("downloadFile complete", res);
      },
    });
  },
  // 获取企业宣传片列表
  getVideoList() {
    const url = '/article/page'
    request(url, 'get', { dyMenuId: 8 }).then(res => {
      const { code, rows } = res
      if (code === 200) {
        // 最多只显示3个元素
        const videoList = rows.slice(0, 3)
        this.setData({ videoList })
      }
    })
  },
  // 获取公司简介
  getIntroduction() {
    const url = '/article/page'
    request(url, 'get', { dyMenuId: 9 }).then(res => {
      const { code, rows } = res
      if (code === 200 && Array.isArray(rows) && rows.length > 0) {
        // 获取第一个元素
        const { id } = rows[0]
        const url = `/article/get/one`
        request(url, 'get', { id }).then(res => {
          this.setData({ introduction: res.data })
        })
      }
    })
  },
  // 获取企业荣誉列表
  getHonorList() {
    const url = '/article/page'
    request(url, 'get', { dyMenuId: 10 }).then(res => {
      const { code, rows } = res
      if (code === 200 && Array.isArray(rows) && rows.length > 0) {
        // 将数组中的元素3个3个一组，构成一个新的数组
        const honor = []
        for (let i = 0; i < rows.length; i += 3) {
          honor.push(rows.slice(i, i + 3))
        }
        this.setData({ honor })
      }
    })
  },
  // 获取学习环境
  getEnvironment() {
    const url = '/article/page'
    request(url, 'get', { dyMenuId: 11 }).then(res => {
      const { code, rows } = res
      if (code === 200) {
        // 最多只显示3个元素
        const environment = rows.slice(0, 3)
        this.setData({ environment })
      }
    })
  },
  /**
   * 跳转到环境列表页面
   * @param {*} e
   */
  jumpToEnvironment(e) {
    const url = "/pages/environmentList/environmentList";
    tt.navigateTo({ url });
  },
});
