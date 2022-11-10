const cmd_p = require("../protobuf/Cmd_pb")
const handlerMap = {};
const cmdType = {
  LOGIN: 1000,
  LOGIN_RESULT: 1001,

  CHOOSE_GAME_SERVER: 1002,
  CHOOSE_GAME_SERVER_RESULT: 1003,

  ENTER_CHAT_ROOM: 1004,
  ENTER_CHAT_ROOM_RESULT: 1005,

  SHOW_USER_LIST: 1006,
  SHOW_USER_LIST_RESULT: 1007,

  CHAT: 1008,
  CHAT_RESULT: 1009,
}

class HallChat {
  constructor(hallUrl) {
    this.socket = wx.connectSocket({
      url: hallUrl,
      success: res => {
        console.info("socket: " + hallUrl + " connect success");
      },
      fail: error => {
        console.error(error);
        wx.showToast({
          title: "网络链接失败",
          icon: 'none',
          duration: 4000
        });
      }
    });
    this.socket.onMessage(function (e) {
      const data = e.data;
      const pg = cmd_p.PackageGroup.deserializeBinary(data);
      const pkgList = pg.getPackagesList();
      if (!pkgList || pkgList.length <= 0) {
        return;
      }
      for (var i in pkgList) {
        const pkg = pkgList[i];
        const cmdType = pkg.getCmdtype();
        const func = handlerMap[cmdType];
        if (func) {
          func(pkg);
        }
      }
    });
    this.socket.onOpen = (e) => {
      console.info("open");
    };
    this.socket.onError = (e) => {
      console.error(e);
    };
    this.socket.onClose = (e) => {
      console.info("close");
    }
  }

  addHandler(cmdType, func) {
    handlerMap[cmdType] = func;
  }
  send(pkg) {
    if (!pkg) {
      return;
    }
    const data = pkg.serializeBinary().buffer;
    this.socket.send({
      data: data
    });
  }
}

module.exports = {
  cmdType, HallChat
}