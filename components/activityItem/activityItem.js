// components/activityItem/activityItem.js
Component({
    properties: {
        // 活动图片名称
        img: {
            type: String,
            value: "t1"
        },
        // 活动名称
        name: {
            type: String,
            value: ""
        },
        item: {
            type: Object,
            value: {}
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
        clickItem(e) {
            const {
                currentTarget: {
                    dataset: {
                        id
                    }
                }
            } = e
            const url = `/pages/newsContent/newsContent?id=${id}`
            tt.navigateTo({
                url
            })
        }
    }
})