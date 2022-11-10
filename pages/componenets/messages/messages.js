// pages/componenets/messages/messages.js
import {
  globalData
} from "../../../utils/global"

import {
  Package
} from "../../../protobuf/Cmd_pb"
import { OK } from "../../../data/vo"
import { Session } from "../../../data/dto"

const cmd_p = require("../../../protobuf/Cmd_pb")
const chat_p = require("../../../protobuf/Chat_pb")
const user_p = require("../../../protobuf/User_pb")

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
    
    friends: [],
    hallChat: undefined
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
      if (display == "none" && this.data.friends.length == 0 && this.data.hallChat) {
        const pkg = new cmd_p.Package();
        const session = wx.getStorageSync('session');
        const sessionPkg = new user_p.Session();
        sessionPkg.setToken(session.token);
        pkg.setCmdtype(this.data.cmdType.LOGIN);
        pkg.setContent(sessionPkg.serializeBinary());
        this.data.hallChat.send(pkg);
      }
      globalData.lastComponent = this;
    },

    isShow() {
      return this.data.display != "none";
    },

    addSocket(hallChat) {
      this.data.hallChat = hallChat;
    }
  },

})