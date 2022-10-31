const cmd = require("../protobuf/Cmd_pb")

export function test(){
  const pkg = new cmd.Package();
  pkg.setCmdtype(1);
  const data  = pkg.serializeBinary();
  console.info(data)
}