// pages/componenets/messages/messages.js
import {
  globalData
} from "../../../utils/global"

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
    items: [{
        value: 'USA',
        name: '美国'
      },
      {
        value: 'CHN',
        name: '中国',
        checked: 'true'
      },
      {
        value: 'BRA',
        name: '巴西'
      },
      {
        value: 'JPN',
        name: '日本'
      },
      {
        value: 'ENG',
        name: '英国'
      },
      {
        value: 'FRA',
        name: '法国'
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change() {
      if (globalData.lastComponent && globalData.lastComponent.isShow() && globalData.lastComponent != this) {
        globalData.lastComponent.change();
      }
      const display = this.data.display;
      this.setData({
        display: display == "none" ? "block" : "none"
      });
      globalData.lastComponent = this;
    },
    isShow() {
      return this.data.display != "none";
    }
  }
})