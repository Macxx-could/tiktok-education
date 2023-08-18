// components/describeItem/describeItem.js
Component({
  properties: {
    // 描述标题
    title: {
      type: String,
      value: "",
    },
    // 描述内容
    content: {
      type: String,
      value: "",
    },
    // 描述图片
    img: {
      type: String,
      value: "t5",
    },
    id: {
      type: String,
      value: "",
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
     * 跳转到就业前景详情页面
     * @param {*} e
     */
    jumpToDetail(e) {
      const { currentTarget: { dataset: { id } } } = e
      const url = `/pages/industryProspectDetails/industryProspectDetails?id=${id}`;
      tt.navigateTo({ url });
    },
  },
});
