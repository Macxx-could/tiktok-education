const { request } = require('../../utils/request.js');
Component({
  /**
   * 组件的初始数据
   */
  data: {
    // 顶部banner列表
    bannerList: [{ bannerUrl: '/images/banner.jpg' }],
    // 活动列表
    activities: [
      { img: "t1", name: "学员日常活动" },
      { img: "t2", name: "学员日常活动" },
      { img: "t3", name: "学员日常活动" },
      { img: "t1", name: "学员日常活动" },
      { img: "t2", name: "学员日常活动" },
      { img: "t3", name: "学员日常活动" },
    ],
    // 公司对外合作动态/新闻
    news: [
      {
        img: "t4",
        title: "新闻标题一",
        date: "2023-7-14",
        content:
          "文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案",
      },
      {
        img: "t4",
        title: "新闻标题二",
        date: "2023-7-14",
        content:
          "文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案",
      },
      {
        img: "t4",
        title: "这是一个超级长的新闻标题用来测试文本截断",
        date: "2023-7-14",
        content:
          "文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案",
      },
      {
        img: "t4",
        title: "新闻标题四",
        date: "2023-7-14",
        content:
          "文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案",
      },
    ],
    // 行业发展前景
    developmentProspects: [
      {
        img: "t5",
        title: "行业发展前景一",
        content:
          "行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案",
      },
      {
        img: "t6",
        title: "行业发展前景二",
        content:
          "行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案",
      },
      {
        img: "t5",
        title: "行业发展前景三",
        content:
          "行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案",
      },
      {
        img: "t6",
        title: "行业发展前景四",
        content:
          "行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案行业发展前景文案",
      },
    ],
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
      this.getActivities()
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
    }
  },
});
