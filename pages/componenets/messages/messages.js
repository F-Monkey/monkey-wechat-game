// pages/componenets/messages/messages.js
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
    display: "none",
    items: [
      {value: 'USA', name: '美国'},
      {value: 'CHN', name: '中国', checked: 'true'},
      {value: 'BRA', name: '巴西'},
      {value: 'JPN', name: '日本'},
      {value: 'ENG', name: '英国'},
      {value: 'FRA', name: '法国'},
    ]
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

    test(){
      console.info("1111");
    }
  }
})
