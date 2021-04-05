import Vue from 'vue'
import axios from 'axios'
import router from '@/router/index.js'
/**
 * 后端服务的地址
 */
const ADMIN_PORTURL = "http://" + window.location.hostname + ":8765/";

/**
 * 响应码
 */
const SUCCEED_CODE = 200;
const FAIL_CODE = 500;

/**
 * token header key
 */
const TOKEN_HEADER = 'Authorization'

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
  if (error.response.code == 401) {
    alert("请先登录账号");
    router.push("/AdminLogin")
  } else if (error.response.code == 423) {
    alert("账号权限不足,请联系超级管理获取权限");
  } else {
    alert("服务器内部错误,请稍后重试或反馈");
  }
}
/**
 * 不带token 的get请求 ajax 模板
 * @param {*} uri 请求路径
 * @param {*} argKeys 请求参数
 * @returns 对应ajax请求函数
 */
const getServiceTemplate = (uri, argKeys = []) => {
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
/**
 * 带token 的get请求 ajax 模板
 * @param {*} uri 请求路径
 * @param {*} argKeys 请求参数
 * @returns 对应ajax请求函数
 */
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
        "Authorization": localStorage.getItem("Authorization")
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
/**
 * 不带token 的post 请求 ajax 模板
 * @param {*} uri 请求参数
 * @param {*} argKeys 请求参数
 * @returns 对应ajax请求函数
 */
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
/**
 * 带token 的post请求 ajax 模板
 * @param {*} uri 请求路径
 * @param {*} argKeys 请求参数
 * @returns 对应ajax请求函数
 */
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
        "Authorization": localStorage.getItem("Authorization")
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

/**
 * 带token 的delete请求 ajax 模板
 * @param {*} uri 请求路径
 * @param {*} argKeys 请求参数
 * @returns 对应ajax请求函数
 */
const deleteServiceTakeTokenTemplate = (uri, argKeys = []) => {
  return (id, argValue = [], succeedEvent = defaultSucceedEvent, failEvent = defaultFailEvent, errorEvent = defaultErrorEvent) => {
    let url = ADMIN_PORTURL + uri + id;
    let body = {}
    argKeys.forEach((itemKey, indexKey) => {
      argValue.forEach((itemValue, indexValue) => {
        if (indexKey === indexValue) {
          body[itemKey] = itemValue;
        }
      })
    });
    axios.delete(url, {
      headers: {
        "Authorization": localStorage.getItem("Authorization")
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
/**
 * 带token 的put请求 ajax 模板
 * @param {*} uri 请求路径
 * @param {*} argKeys 请求参数
 * @returns 对应ajax请求函数
 */
const putServiceTakeTokenTemplate = (uri, argKeys = []) => {
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
    axios.put(url, body, {
      headers: {
        "Authorization": localStorage.getItem("Authorization")
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

/**
 * 获取图形验证码
 */
const captchaService = getServiceTemplate("captcha");
/**
 * 管理员用户登录
 */
const adminUserLoginService = postServiceTemplate("auth/login", ["username", "password", "verId", "verCode"]);
/**
 * 获取当前登录用户所拥有的权限菜单
 */
const selectMenuTreeByUserId = getServiceTakeTokenTemplate("adminMenu/curAuth");
/**
 * 获取当前登录用户所拥有的权限菜单
 */
const selectAllMenuTree = getServiceTakeTokenTemplate("adminMenu/allMenu");
/**
 * 获取当前登录用户所拥有的权限菜单
 */
const selectAllMenuTree2 = getServiceTakeTokenTemplate("adminMenu/allMenu2");
/**
 * 重置管理员密码
 */
const adminUserResetPasswordService = postServiceTakeTokenTemplate("adminUser/resetPassword", ["userId"])
/**
 * 获取所有管理员
 */
const selectAllAdminUserService = getServiceTakeTokenTemplate("adminUser/all", []);
/**
 * 添加管理员
 */
const addAdminUserService = postServiceTakeTokenTemplate("adminUser/", ["username", "password", "sex", "phone"])
/**
 * 删除一个管理员
 */
const deleteAdminUserService = deleteServiceTakeTokenTemplate("adminUser/", [])
/**
 * 修改管理员信息
 */
const updateAdminUserService = putServiceTakeTokenTemplate("adminUser/", ["id", "username", "password", "sex", "phone"]);
/**
 * 条件查询管理员
 */
const selectAdminUserService = postServiceTakeTokenTemplate("adminUser/selective", ["no", "username", "phone"]);

/**
 * 获取所有角色
 */
const selectAllAdminRoleService = getServiceTakeTokenTemplate("adminRole/all", []);
/**
 * 条件查询角色
 */
const selectAdminRoleService = postServiceTakeTokenTemplate("adminRole/selective", ["id", "name", "des"])
/**
 * 根据用户id获取角色
 */
const selectAdminRoleByUserIdService = getServiceTakeTokenTemplate("adminRole/", ['userId']);
/**
 * 添加一个角色
 */
const addAdminRoleService = postServiceTakeTokenTemplate("adminRole/", ["name", "des"])
/**
 * 修改角色信息
 */
const updateAdminRoleService = putServiceTakeTokenTemplate("adminRole/", ["id", "name", "des"])
/**
 * 修改用户拥有的角色
 */
const updateAdminRoleByUserService = postServiceTakeTokenTemplate("adminRole/setUserRoles", ["userId", "newIds"])
/**
 * 删除一个角色
 */
const deleteAdminRoleService = deleteServiceTakeTokenTemplate("adminRole/", [])

/**
 * 条件查询菜单
 */
const selectAdminMenuService = postServiceTakeTokenTemplate("adminMenu/selective", ["id", "name", "title", "type"])
/**
 * 根据角色id获取菜单
 */
const selectAdminMenuByRoleIdService = getServiceTakeTokenTemplate("adminMenu/", ['roleId']);
/**
 * 添加一个菜单
 */
const addAdminMenuService = postServiceTakeTokenTemplate("adminMenu/", ["name", "des"])
/**
 * 修改菜单信息
 */
const updateAdminMenuService = putServiceTakeTokenTemplate("adminMenu/", ["id", "name", "des", "title", "type", "icon"])
/**
 * 删除菜单
 */
const deleteAdminMenuService = deleteServiceTakeTokenTemplate("adminMenu/", [])
/**
 * 修改角色拥有的菜单
 */
const updateAdminMenuByRoleService = postServiceTakeTokenTemplate("adminMenu/setRoleMenus", ["roleId", "newIds"])
/**
 * 获取当前登录的管理员信息
 */
 const getLoginAdminUserInfo = getServiceTakeTokenTemplate("auth/myInfo")
/************************************************************************************** */



const updateLoginAdminUserInfo = postServiceTakeTokenTemplate("admin/person/update", ["staffName", "phone", "staffSex"])


export {
  captchaService,
  adminUserLoginService,
  selectMenuTreeByUserId,
  selectAllMenuTree,
  selectAllMenuTree2,
  adminUserResetPasswordService,

  selectAllAdminUserService,
  selectAdminUserService,
  addAdminUserService,
  deleteAdminUserService,
  updateAdminUserService,

  selectAllAdminRoleService,
  selectAdminRoleService,
  selectAdminRoleByUserIdService,
  addAdminRoleService,
  updateAdminRoleService,
  deleteAdminRoleService,
  updateAdminRoleByUserService,

  selectAdminMenuService,
  selectAdminMenuByRoleIdService,
  addAdminMenuService,
  updateAdminMenuService,
  deleteAdminMenuService,
  updateAdminMenuByRoleService,

  getLoginAdminUserInfo,
  updateLoginAdminUserInfo,
}
