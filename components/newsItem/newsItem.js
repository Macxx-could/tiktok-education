// components/newsItem/newsItem.js
Component({
    properties: {
        item: {
            type: Object,
            required: true
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
         * 点击新增列表项
         * 跳转到对应的新闻内容页面
         * @param e
         */
        clickNewsItem(e) {
            const {currentTarget: {dataset: {id}}} = e
            const url = `/pages/newsContent/newsContent?id=${id}`
            tt.navigateTo({url})
        }
    }
})
