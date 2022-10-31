const user_p = require("../protobuf/User_pb")
const cmd_p = require("../protobuf/Cmd_pb")
import { SYS_ACCOUNT, post } from "../utils/http"
import { OK } from "../data/vo"

class SignIn extends Object {
  constructor() {
    super();
  }

  signIn = (appCode) => {
    wx.showLoading({
      title: 'login...',
    })
    const login = new user_p.Login();
    login.setAppcode(appCode);
    const data = login.serializeBinary();
    const pkg = new cmd_p.Package();
    pkg.setContent(data);
    post({
      url: SYS_ACCOUNT + "/user/wx/signIn",
      data: pkg.serializeBinary().buffer,
      dataType: "其他",
      responseType: "arraybuffer",
      headers: {
        "content-type": "application/x-protobuf"
      }
    }).then(resp => {
      const pg = cmd_p.PackageGroup.deserializeBinary(resp.data);
      const pkgList = pg.getPackagesList();
      if (!pkgList || pkgList.length <= 0) {
        wx.showToast({ title: "登录失败", icon: 'none', duration: 2000 });
        return;
      }
      let pkg = pkgList[0];
      let resultMsg = pkg.getResultmsg();
      if (resultMsg.getCode() != OK) {
        wx.showToast({ title: resultMsg.getMsg(), icon: 'none', duration: 2000 });
        return;
      }
      const proto_userInfo = user_p.UserInfo.deserializeBinary(pkg.getContent());
      const userInfo = {
        uid: proto_userInfo.getUid(),
        username: proto_userInfo.getUsername(),
        head: proto_userInfo.getHead()
      }
      wx.setStorageSync("user", userInfo);
      wx.switchTab({
        url:"../main/main",
        fail: function(e){
          console.error(e)
        }
      })
    }).catch(e => {
      console.error(e);
    }).finally(() => {
      wx.hideLoading()
    })
  }
}

export const signIn = new SignIn();