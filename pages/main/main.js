// pages/main/main.ts
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
    innerAudioContext: undefined
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.data.innerAudioContext = this.createMediaPlay("/resources/media/index.mp3")
    //this.data.innerAudioContext.play();
  },

  createMediaPlay: (source) => {
    const innerAudioContext = wx.createInnerAudioContext();
    innerAudioContext.src = source;
    innerAudioContext.onEnded(() => {
      innerAudioContext.play();
    })
    return innerAudioContext;
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

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

  }
})