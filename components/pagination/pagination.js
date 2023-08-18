// components/pagination/pagination.js 
Component({
    properties: {
        currentPage: {
            type: Number, value: 1
        },
        total: {
            type: Number, value: 1
        },
        pageSize: {
            type: Number, value: 10
        }
    },
    observers: {
        "currentPage,pageSize,total"(currentPage, pageSize, total) {
            // 使用数据总条数和每页条目数计算总页数
            const totalPage = Math.ceil(total / pageSize);
            // 计算出当前页码数
            this.setData({ totalPage, pageNum: currentPage })
        }
    }, /**
     * 组件的初始数据
     */
    data: {
        pageNumbers: [],
        pageNum: 1, // 当前页面
        totalPage: 0, // 总页数
    },

    /**
     * 组件的方法列表
     */
    methods: {
        bindKeyInput(e) {
            let pageNum = e.detail.value < 0 ? 0 : e.detail.value;
            pageNum = pageNum > this.data.totalPage ? this.data.totalPage : pageNum;
            this.setData({ pageNum });
            this.triggerEvent('pageChange', { page: pageNum });
        },
        onPrevPage() {
            if (this.data.currentPage > 1) {
                this.triggerEvent('pageChange', { page: this.data.currentPage - 1 });
            }
        },
        onNextPage() {
            if (this.data.currentPage < this.data.totalPage) {
                this.triggerEvent('pageChange', { page: this.data.currentPage + 1 });
            }
        },
    }
})
