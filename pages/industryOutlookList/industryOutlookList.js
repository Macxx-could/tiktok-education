// f:\code\part_time_job\tiktok-education\pages\industryOutlookList\industryOutlookList.js
Page({
  data: {
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
    currentPage: 1,
    pageSize: 10,
    total: 100,
  },
  onLoad: function (options) {},
  /**
   * 跳转到就业前景详情页面
   * @param {*} e
   */
  jumpToDetail(e) {
    const url = `/pages/industryProspectDetails/industryProspectDetails`;
    tt.navigateTo({ url });
  },
});
