const user_p = require("../protobuf/User_pb")
const cmd_p = require("../protobuf/Cmd_pb")
import { OK } from "../data/vo"
import {Session} from "../data/dto"

class HallChat {
  constructor(hallUrl){
    this.socket = wx.connectSocket({
      url: hallserver,
      success: res => {
        console.info("socket: " + hallserver + " connect success");
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
    this.socket.onMessage = this.onMessage;
  }
  
  onMessage(e){
    const data = e.data;
    const pg = cmd_p.PackageGroup.deserializeBinary(data);
    const pkgList = pg.getPackagesList();
    if (!pkgList || pkgList.length <= 0) {
      return;
    }
    for(var i in pkgList){
      const pkg = pkgList[i];
      pkg.getGroupid();
    }
  }

  send(msg){

  }
}