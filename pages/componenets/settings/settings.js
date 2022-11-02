// pages/componenets/settings/settings.js
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
    display: "none"
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
    },
    changeMusic(e) {
      const val = e.detail.value;
      if (val) {
        globalData.innerAudioContext.play();
      } else {
        globalData.innerAudioContext.stop();
      }
    }
  }
})