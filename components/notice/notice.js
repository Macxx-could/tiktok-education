const { request } = require('../../utils/request.js');
Component({
    /**
     * 组件的初始数据
     */
    data: {
        list: [], // 播报列表
        current: 0, // 当前播报内容索引
        timer: null,
        content: ""
    },
    /**
     * 生命周期
     */
    lifetimes: {
        attached() {
            // 获取播报列表
            const url = '/notice/list'
            request(url, 'get').then(res => {
                const { data: list } = res
                this.setData({ list, current: 0 })
                if (list && list.length > 0) {
                    this.setData({
                        content: list[0].content
                    })
                    const timer = setInterval(() => {
                        let current = ++this.data.current
                        if (current >= this.data.list.length) {
                            current = 0
                        }
                        const { content } = this.data.list[current]
                        this.setData({ current, content })
                    }, 3000)
                    this.setData({ timer })
                }
            }).catch(err => {
                console.log(err)
            })
        },

    },
    observers: {

    },
    /**
     * 组件的方法列表
     */
    methods: {}
})
