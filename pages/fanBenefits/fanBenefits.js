const { request } = require('../../utils/request.js');
Component({
    /**
     * 组件的初始数据
     */
    data: {
        detail: {}
    },
    lifetimes: {
        attached() {
            this.getBenefits()
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        getBenefits() {
            const url = '/article/page'
            request(url, 'get', { dyMenuId: 20 }).then(res => {
                const { code, rows } = res
                if (code === 200 && Array.isArray(rows) && rows.length > 0) {
                    // 获取第一个元素
                    const { id } = rows[0]
                    const url = `/article/get/one`
                    request(url, 'get', { id }).then(res => {
                        this.setData({ detail: res.data })
                    })
                }
            })
        }
    }
});
