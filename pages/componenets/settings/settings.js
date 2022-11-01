// pages/componenets/settings/settings.js
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
    display: "none"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hide() {
      this.setData({
        display: "none"
      })
    },
    show(){
      this.setData({
        display: "block"
      })
    },
  }
})
