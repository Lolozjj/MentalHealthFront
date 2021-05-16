import axios from 'axios'

const URL = "/chatbot";
const KEY = "8641e97099dd4076bdbfb7a4c4c09967"


const chatbotService = (msg,succeed) => {
  let body = {
    "reqType": 0,
    "perception": {
      "inputText": {
        "text": msg
      }
    },
    "userInfo": {
      "apiKey": KEY,
      "userId": "1",
    }
  }
  axios.post(URL, body, {
  }).then(response => {
    succeed(response)
  }).catch(error => {
    alert("聊天机器人出错啦");
  })
}


export {
    chatbotService,
}