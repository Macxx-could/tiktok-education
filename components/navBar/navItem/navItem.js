// components/navBar/navItem/navItem.js
Component({
    properties: {
        icon: {
            type: String,
            value: '1'
        },
        text: {
            type: String,
            value: ''
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
        clickItem() {
            const key = this.data.text
            if(key === '线上课程') return
            const urlMap = {
                ['企业介绍']: "/pages/companiesToIntroduce/companiesToIntroduce",
                ['课程介绍']: "/pages/courseIntroduction/courseIntroduction",
                ['学员成果']: "/pages/studentAchievements/studentAchievements",
                ['线上课程']: "/pages/home/home",
            }
            const url = urlMap[key] || "/pages/home/home"
            tt.navigateTo({url})
        }
    }
})
