const axios = require("axios").default;

const axiosRequest = (method, url, data = undefined, headers = {}) => {
  
  return new Promise((resolve, reject) => {
    axios({
      method,
      url,
      data,
      headers
    }).then(response => {
      resolve({success: true, rawResponse: response.data})
    }).catch(error => {
      reject({success: false, message: error.message})
    });
  })
}

const httpRequest = {
  GET: async (url, headers) => {
    return await axiosRequest('get', url, headers);
  }
}

module.exports = httpRequest;