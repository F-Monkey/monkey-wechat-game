export const DEFAULT_HEADER = {
  'content-type': 'application/x-www-form-urlencoded', // 默认值// 自定义请求头
  'version': 'v1.0' // 版本号
}
export const SYS_ACCOUNT = "http://192.168.88.145:8081";

const http = (request) => {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: request.url,
      header: request.headers,
      method: request.method,
      data: request.data,
      dataType: request.dataType,
      responseType: request.responseType,
      success: (resp) => {
        if (resp.statusCode == 200) {
          resolve(resp);
        } else {
          reject(new Error(resp.data.toString()));
        }
      },
      fail: (error) => {
        if (reject) {
          reject(error);
        }
      }
    })
  })
}

export const get = (request) => {
  let data = request.data;
  var url = request.url;
  if (data && JSON.stringify(data) != '{}') {
    url += "?";
    for (var key in data) {
      url += (key + "=" + data[key]) + "&";
    }
  }
  request.url = url;
  request.method = "GET";
  request.headers = request.headers ? request.headers : DEFAULT_HEADER;
  return http(request);
}

export const post = (request) => {
  request.method = "POST";
  request.headers = request.headers ? request.headers : DEFAULT_HEADER;
  return http(request)
}

export const put = (request) => {
  request.method = "PUT";
  request.headers = request.headers ? request.headers : DEFAULT_HEADER;
  return http(request)
}


export const del = (request) => {
  request.method = "DELETE";
  request.headers = request.headers ? request.headers : DEFAULT_HEADER;
  return http(request)
}
