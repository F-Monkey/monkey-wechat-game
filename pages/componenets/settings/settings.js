// pages/componenets/settings/settings.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    options: [
      {
        name: "music",
        enabled: true
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeStatus: (e) => {
        const target = e.target;
        const code = target.dataset.code;
    }
  }
})
