export class Session {
  constructor(proto_session){
    this.hallServer = proto_session.getHallserver();
    this.token = proto_session.getToken();
    this.roomServer = proto_session.getRoomserver();
    this.user = {};
    const userInfo = proto_session.getUser();
    this.user.uid = userInfo.getUid();
    this.user.username = userInfo.getUsername();
    this.user.head = userInfo.getHead();
  }
}