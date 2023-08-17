const { request } = require('../../utils/request.js');
Component({
  /**
   * 组件的初始数据
   */
  data: {
    // 顶部banner列表
    bannerList: [{ bannerUrl: '/images/banner.jpg' }],
    // 活动列表
    activities: [],
    // 公司对外合作动态/新闻
    news: [],
    // 行业发展前景
    developmentProspects: [],
    // 创始人/品牌故事
    stories: [
      {
        img: "t7",
        brand: "零壹教育课堂",
        founder: "某某某",
        // 创始人故事
        founderStory: "创始人故事".repeat(50),
        // 品牌故事
        brandStory: "品牌故事".repeat(50),
      },
    ],
  },

  lifetimes: {
    attached() {
      this.getBannerList()
      this.getActivities() // 学生日常活动
      this.getNewsList() // 公司对外新闻
      this.getDevelopmentProspects() // 行业发展前景
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 获取顶部banner轮播图列表
    getBannerList() {
      const url = '/banner/list'
      request(url, 'get').then(res => {
        const { data: bannerList } = res
        this.setData({ bannerList })
      }).catch(err => {
        console.log(err)
      })
    },
    // 获取学员日常活动列表
    getActivities() {
      const url = '/article/page'
      request(url, 'get', { dyMenuId: 4 }).then(res => {
        const { code, rows } = res
        if (code === 200) {
          // 最多只显示6个元素
          const activities = rows.slice(0, 6)
          this.setData({ activities })
        }
      })
    },
    // 获取公司对外合作动态/新闻
    getNewsList() {
      const url = '/article/page'
      request(url, 'get', { dyMenuId: 5 }).then(res => {
        const { code, rows } = res
        if (code === 200) {
          // 最多只显示4个元素
          const news = rows.slice(0, 4)
          this.setData({ news })
        }
      })
    },
    // 获取行业发展前景
    getDevelopmentProspects() {
      const url = '/article/page'
      request(url, 'get', { dyMenuId: 6 }).then(res => {
        const { code, rows } = res
        if (code === 200) {
          // 最多只显示4个元素
          const developmentProspects = rows.slice(0, 4)
          this.setData({ developmentProspects })
        }
      })
    }
  },
});
