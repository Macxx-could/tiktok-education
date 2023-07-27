// pages/newsList/newsList.js 
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 公司对外合作动态/新闻
        news: [
            {
                img: 't4',
                title: '新闻标题一',
                date: '2023-7-14',
                content: '文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案'
            },
            {
                img: 't4',
                title: '新闻标题二',
                date: '2023-7-14',
                content: '文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案'
            },
            {
                img: 't4',
                title: '这是一个超级长的新闻标题用来测试文本截断',
                date: '2023-7-14',
                content: '文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案'
            },
            {
                img: 't4',
                title: '新闻标题四',
                date: '2023-7-14',
                content: '文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案文章描述文案'
            }
        ],
        currentPage: 1,
        pageSize: 10,
        total: 100
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    handlePageChange(event) {
        const page = event.detail.page;
        this.setData({
            currentPage: page
        });
        // 在这里可以根据新的页码进行数据的加载或其他操作
    }

})