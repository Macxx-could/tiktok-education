// components/containerBlock/containerBlock.js
Component({
    properties: {
        // 容器标题
        title: {
            type: String,
            value: ""
        }
    },
    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * 更多文字点击事件
         */
        clickMoreText(e) {
            const {currentTarget: {dataset: {title}}} = e
            // 路径映射
            const urlMap = {
                ['学员/员工日常活动']: "/pages/newsList/newsList",
                ['公司对外合作动态/新闻']: "/pages/newsList/newsList",
                ['行业前景确认']: "/pages/newsList/newsList",
                ['创始人故事/品牌故事']: "/pages/newsList/newsList",
            }
            const url = urlMap[title] || "/pages/home/home"
            tt.navigateTo({url})
        }
    }
})
