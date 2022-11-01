// pages/main/main.ts
import {
  globalData
} from "../../utils/global"
import {
  createMediaPlay
} from "../../utils/util"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 3000,
    circular: true,
    main_circle: [],
    innerAudioContext: undefined,
    center_btns: [{
        "text": "剧本杀",
        "isHover": false,
        "url": "/pages/games/cosPlay/cosPlay"
      },
      {
        "isHover": false,
        "text": "小游戏"
      },
      {
        "isHover": false,
        "text": "其他"
      }
    ],
    lastComponent: undefined,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    globalData.innerAudioContext = createMediaPlay("/resources/media/index.mp3")
    //globalData.innerAudioContext.play();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    globalData.innerAudioContext.stop();
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  showRightBox(e) {
    debugger;
    if (this.data.lastComponent) {
      this.data.lastComponent.hide();
    }
    console.info(e);
    const component = this.data.lastComponent = this.selectComponent("#" + e.currentTarget.id);
    component.show();
  },
})