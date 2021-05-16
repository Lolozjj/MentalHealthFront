import axios from 'axios'
import router from '@/router/index.js'

/**
 * 后端服务的地址
 */
const FRONT_PORTURL = "http://" + window.location.hostname + ":8756/";

/**
 * 响应码
 */
const SUCCEED_CODE = 200;
const FAIL_CODE = 500;
/**
 * 默认ajax请求成功后 响应码200 执行事件
 * @param {消息} succeed 
 */
const defaultSucceedEvent = (succeed) => {
  alert(succeed);
}
/**
 * 默认ajax请求成功后 响应码500 执行事件
 * @param {消息} fail 
 */
const defaultFailEvent = (fail) => {
  alert(fail);
}
/**
 * 默认ajax 请求失败后 执行事件
 * @param {错误信息} error 
 */
const defaultErrorEvent = (error) => {
  console.log(error);
  if (error.response.code == 401) {
    alert("请先登录账号");
  } else if (error.response.code == 423) {
    alert("账号权限不足,请联系超级管理获取权限");
  } else {
    alert("服务器内部错误,请稍后重试或反馈");
  }
}


function ServiceTemplate(uri, argKeys = []) {
  this.url = FRONT_PORTURL + uri;
  this.argKeys = argKeys;
  this.succeedEvent = defaultSucceedEvent;
  this.failEvent = defaultFailEvent;
  this.errorEvent = defaultErrorEvent;
  this.tokenHeader = "token";
  this.param = {}
}

/**
 * 设置成功事件
 * @param {成功事件} event 
 */
ServiceTemplate.prototype.setSucceed = function (event) {
  this.succeedEvent = event;
  return this;
}
/**
 * 设置失败事件
 * @param {失败事件} event 
 */
ServiceTemplate.prototype.setFail = function (event) {
  this.failEvent = event;
  return this;
}
/**
 * 设置错误事件
 * @param {错误事件} event 
 */
ServiceTemplate.prototype.setError = function (event) {
  this.errorEvent = event;
  return this;
}
/**
 * 设置请求参数
 * @param {参数} param 
 */
ServiceTemplate.prototype.setParam = function (param) {
  this.param = param;
  return this;
}

/**
 * 发送GET请求
 */
ServiceTemplate.prototype.sendGetService = function () {
  axios.get(this.url, {
    headers: {
      "token": localStorage.getItem(this.tokenHeader)
    },
    params: this.param
  }).then(response => {
    if (response.data.code == SUCCEED_CODE) {
      this.succeedEvent(response.data);
    } else if (response.data.code == FAIL_CODE) {
      this.failEvent(response.data);
    }
  }).catch(error => {
    this.errorEvent(error);
  })
}
/**
 * 发送POST请求
 */
ServiceTemplate.prototype.sendPostService = function () {
  axios.post(this.url, this.param, {
    headers: {
      "token": localStorage.getItem(this.tokenHeader)
    }
  }).then(response => {
    if (response.data.code == SUCCEED_CODE) {
      this.succeedEvent(response.data);
    } else if (response.data.code == FAIL_CODE) {
      this.failEvent(response.data);
    }
  }).catch(error => {
    this.errorEvent(error);
  })
}
/**
 * 发送PUT请求
 */
ServiceTemplate.prototype.sendPutService = function () {
  axios.put(this.url, this.param, {
    headers: {
      "token": localStorage.getItem(this.tokenHeader)
    }
  }).then(response => {
    if (response.data.code == SUCCEED_CODE) {
      this.succeedEvent(response.data);
    } else if (response.data.code == FAIL_CODE) {
      this.failEvent(response.data);
    }
  }).catch(error => {
    this.errorEvent(error);
  })
}
/**
 * 发送DELETE请求
 */
ServiceTemplate.prototype.sendDeleteService = function () {
  axios.delete(this.url, {
    headers: {
      "token": localStorage.getItem(this.tokenHeader)
    },
    params: this.param
  }).then(response => {
    if (response.data.code == SUCCEED_CODE) {
      this.succeedEvent(response.data);
    } else if (response.data.code == FAIL_CODE) {
      this.failEvent(response.data);
    }
  }).catch(error => {
    this.errorEvent(error);
  })
}
/**
 * 账号密码登录
 */
const accountLoginService = new ServiceTemplate("auth/accountLogin", ['account', 'password']);
/**
 * 获取手机验证码
 */
const getLoginVerCodeService = new ServiceTemplate("auth/phoneCode", ['phone']);
/**
 * 手机验证码一键注册登录
 */
const phoneLoginService = new ServiceTemplate("auth/phoneLogin", ['phone', 'verCode']);
/**
 * token 验证
 */
const tokenVerifyService = new ServiceTemplate("auth/verify");
/**
 * 获取所有文章类型
 */
const getAllArticleTypeService = new ServiceTemplate("article/type");
/**
 * 获取文章
 */
const getArticleByTypeService = new ServiceTemplate("article/frontAll");
/**
 * 获取推荐文章
 */
const getRecommendArticleService = new ServiceTemplate("article/recommend");
/**
 * 根据id获取文章
 */
const getArticleByIdService = new ServiceTemplate("article/front", ["id"]);
/**
 * 收藏文章
 */
const collectArticleService = new ServiceTemplate("articleCollect/collect", ["articleId"]);
/**
 * 点赞文章
 */
const likeArticleService = new ServiceTemplate("article/like", ["id"]);
/**
 * 浏览文章
 */
const lookArticleService = new ServiceTemplate("article/look", ["id"]);
/**
 * 判断用户是否收藏了这篇文章
 */
const haveCollectArticleService = new ServiceTemplate("articleCollect/haveCollect", ["articleId"]);
/**
 * 写文章写一条评论
 */
const writeCommentService = new ServiceTemplate("articleComment/writeComment", ["articleId", "content"]);
/**
 * 回复某个评论
 */
const replyCommentService = new ServiceTemplate("articleComment/reply", ["articleId", "parentId", "content"]);
/**
 * 得到文章的根评论
 */
const getRootCommentService = new ServiceTemplate("articleComment/roots", ["articleId"]);
/**
 * 得到某个评论的子评论
 */
const getSonCommentService = new ServiceTemplate("articleComment/sons", ["id"]);
/**
 * 点赞某个评论
 */
const zanCommentService = new ServiceTemplate("articleComment/zan", ["id"]);
/**
 * 写一篇文章
 */
const writeArticleService = new ServiceTemplate("article/", ["title,imgUrl,des,content,type,tag"]);
/**
 * 写了一个问题
 */
const writeQuestionService = new ServiceTemplate("question/", ["title,content,isAnonymous,tags"]);
/**
 * 获得推荐问题
 */
const getRecommendQuestion = new ServiceTemplate("question/recommend", ['curPage', 'pageSize']);
/**
 * 获得最新问题
 */
const getNewestQuestion = new ServiceTemplate("question/newest", ['curPage', 'pageSize']);
/**
 * 获得最火的问题
 */
const getHotQuestion = new ServiceTemplate("question/hot", ['curPage', 'pageSize']);
/**
 * 获得最火的问题
 */
const getUserQuestionService = new ServiceTemplate("question/userInfo");
/**
 * 获得问题详情
 */
const getQuestionByIdService = new ServiceTemplate("question/front", ["id"]);
/**
 * 问题点赞
 */
const hugQuestionService = new ServiceTemplate("question/hug", ["id"]);
/**
 * 首页问题推荐
 */
const homeQuestionService = new ServiceTemplate("question/home")
/**
 * 收藏问题
 */
const collectQuestionService = new ServiceTemplate("questionCollect/collect", ["id"]);
/**
 * 判断该问题是否已经收藏了
 */
const haveCollectQuestionService = new ServiceTemplate("questionCollect/haveCollect", ["id"]);
/**
 * 获取某个问题的所有回答
 */
const getAnswerByQuestionIdService = new ServiceTemplate("answer/front", ["id"]);
/**
 * 获取推荐面板的推荐回答
 */
const getRecommendAnswerService = new ServiceTemplate("answer/recommend", ["curPage", "pageSize"]);
/**
 * 写回答
 */
const writeAnswerService = new ServiceTemplate("answer/", ["content", "questionId"]);
/**
 * 赞个回答
 */
const zanAnswerService = new ServiceTemplate("answer/zan", ["id"]);
/**
 * 获得个人中心的用户基本信息
 */
const userInfoService = new ServiceTemplate("auth/myInfo");
/**
 * 获得个人中心的用户基本信息
 */
const modifUserInfoService = new ServiceTemplate("auth/modificationMyInfo");
/**
 * 获得个人中心数量信息
 */
const sumInfoService = new ServiceTemplate("informationUser/sumInfo");
/**
 * 获得用户所属文章
 */
const getMyArticleService = new ServiceTemplate("informationUser/articles");
/**
 * 获得用户所属问题
 */
const getMyQuestionService = new ServiceTemplate("informationUser/questions");
/**
 * 修改密码
 */
const modifPasswordService = new ServiceTemplate("user/password");
/**
 * 修改密码
 */
 const uploadArticleImageService = new ServiceTemplate("article/image");
export {
  uploadArticleImageService,
  getMyArticleService,
  getMyQuestionService,
  modifUserInfoService,
  modifPasswordService,
  userInfoService,
  sumInfoService,
  accountLoginService,
  tokenVerifyService,
  getAllArticleTypeService,
  getArticleByTypeService,
  getRecommendArticleService,
  getArticleByIdService,
  collectArticleService,
  haveCollectArticleService,
  likeArticleService,
  lookArticleService,
  writeCommentService,
  replyCommentService,
  getRootCommentService,
  getSonCommentService,
  zanCommentService,
  writeArticleService,
  writeQuestionService,
  getRecommendQuestion,
  getNewestQuestion,
  getHotQuestion,
  getUserQuestionService,
  getQuestionByIdService,
  hugQuestionService,
  collectQuestionService,
  haveCollectQuestionService,
  getAnswerByQuestionIdService,
  writeAnswerService,
  zanAnswerService,
  getRecommendAnswerService,
  getLoginVerCodeService,
  phoneLoginService,
  homeQuestionService
}
