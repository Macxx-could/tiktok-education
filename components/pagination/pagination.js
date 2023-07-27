// components/pagination/pagination.js 
Component({
    properties: {
        currentPage: {
            type: Number, value: 1
        }, total: {
            type: Number, value: 1
        }, pageSize: {
            type: Number, value: 10
        }
    }, observers: {
        "currentPage,pageSize,total"(currentPage, pageSize, total) {
            // 假设 currentPage 表示当前页码，totalPages 表示总页数，displayPageCount 表示要显示的页码数量
            let displayPageCount = 5;
            // 计算起始页码和结束页码
            let startPage = Math.max(1, currentPage - Math.floor(displayPageCount / 2));
            let endPage = Math.min(total, startPage + displayPageCount - 1);

            // 如果当前页码靠近起始页码，则调整结束页码
            if (endPage - startPage + 1 < displayPageCount) {
                endPage = Math.min(total, currentPage + Math.ceil(displayPageCount / 2) - 1);
                startPage = Math.max(1, endPage - displayPageCount + 1);
            }

            // 生成页码数组
            const pageNumbers = [];
            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(i);
            }

            this.setData({
                pageNumbers: pageNumbers
            })

            console.log(pageNumbers);
        }
    }, /**
     * 组件的初始数据
     */
    data: {
        pageNumbers: []
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onPrevPage() {
            if (this.data.currentPage > 1) {
                this.triggerEvent('pageChange', {page: this.data.currentPage - 1});
            }
        }, onNextPage() {
            if (this.data.currentPage < this.data.total) {
                this.triggerEvent('pageChange', {page: this.data.currentPage + 1});
            }
        }, onPageNumberTap(event) {
            const page = event.currentTarget.dataset.page;
            if (page !== this.data.currentPage) {
                this.triggerEvent('pageChange', {page});
            }
        }
    }
})
