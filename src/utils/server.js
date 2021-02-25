import Vue from 'vue'
import axios from 'axios'
import router from'@/router/index.js'
//后端管理端主路径
let ADMIN_PORTURL = "http://" + window.location.hostname + ":9527/";

const SUCCEED_CODE = 200;
const FAIL_CODE = 500;

const defaultSucceedEvent = (succeed) => {
  alert(succeed);
}
const defaultFailEvent = (fail) => {
  alert(fail);
}
const defaultErrorEvent = (error) => {
  if(error.response.status==401){
    alert("请先登录账号");
    router.push("/AdminLogin")
  }
  else if (error.response.status == 423) {
    alert("账号权限不足,请联系超级管理获取权限");
  } else {
    alert("服务器内部错误,请稍后重试或反馈");
  }
}

const getServiceTakeTokenTemplate = (uri, argKeys = []) => {
  return (argValue = [], succeedEvent = defaultSucceedEvent, failEvent = defaultFailEvent, errorEvent = defaultErrorEvent) => {
    let url = ADMIN_PORTURL + uri;
    let body = {}
    argKeys.forEach((itemKey, indexKey) => {
      argValue.forEach((itemValue, indexValue) => {
        if (indexKey === indexValue) {
          body[itemKey] = itemValue;
        }
      })
    });
    axios.get(url, {
      headers: {
        "token": localStorage.getItem("token")
      },
      params: body
    }).then(response => {
      if (response.data.code == SUCCEED_CODE) {
        succeedEvent(response.data);
      } else if (response.data.code == FAIL_CODE) {
        failEvent(response.data);
      }
    }).catch(error => {
      errorEvent(error);
    })
  }
}
const postServiceTemplate = (uri, argKeys = []) => {
  return (argValue = [], succeedEvent = defaultSucceedEvent, failEvent = defaultFailEvent, errorEvent = defaultErrorEvent) => {
    let url = ADMIN_PORTURL + uri;
    let body = {}
    argKeys.forEach((itemKey, indexKey) => {
      argValue.forEach((itemValue, indexValue) => {
        if (indexKey === indexValue) {
          body[itemKey] = itemValue;
        }
      })
    });
    axios.post(url, body).then(response => {
      if (response.data.code == SUCCEED_CODE) {
        succeedEvent(response.data);
      } else if (response.data.code == FAIL_CODE) {
        failEvent(response.data);
      }
    }).catch(error => {
      errorEvent(error);
    })
  }
}
const postServiceTakeTokenTemplate = (uri, argKeys = []) => {
  return (argValue = [], succeedEvent = defaultSucceedEvent, failEvent = defaultFailEvent, errorEvent = defaultErrorEvent) => {
    let url = ADMIN_PORTURL + uri;
    let body = {}
    argKeys.forEach((itemKey, indexKey) => {
      argValue.forEach((itemValue, indexValue) => {
        if (indexKey === indexValue) {
          body[itemKey] = itemValue;
        }
      })
    });
    axios.post(url, body, {
      headers: {
        "token": localStorage.getItem("token")
      }
    }).then(response => {
      if (response.data.code == SUCCEED_CODE) {
        succeedEvent(response.data);
      } else if (response.data.code == FAIL_CODE) {
        failEvent(response.data);
      }
    }).catch(error => {
      errorEvent(error);
    })
  }
}

const adminUserLoginService = postServiceTemplate("admin/login", ["loginAccount", "loginPassword"]);
const adminUserResetPasswordService = postServiceTakeTokenTemplate("admin/resetPassword",["loginAccount"])
const selectAllAdminUserService = getServiceTakeTokenTemplate("admin/all", []);
const selectAdminUserService = getServiceTakeTokenTemplate("admin/select", ["loginAccount", "staffName", "staffSex"]);
const addAdminUserService = postServiceTakeTokenTemplate("admin/add",["loginAccount","loginPassword","staffName","staffSex","phone","roleId"])
const deleteAdminUserService = postServiceTakeTokenTemplate("admin/delete",["loginAccount"])
const updateAdminUserService = postServiceTakeTokenTemplate("admin/update",["loginAccount","staffName","staffSex","phone","roles"]);

const selectAdminRoleService = getServiceTakeTokenTemplate("admin/role/select", ["roleName", "createTime"])

export {
  adminUserLoginService,
  adminUserResetPasswordService,
  selectAllAdminUserService,
  selectAdminUserService,
  selectAdminRoleService,
  addAdminUserService,
  deleteAdminUserService,
  updateAdminUserService,
}
