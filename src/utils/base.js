export default {
  isFrontLogin() {
    var token = localStorage.getItem("token");
    if (token == null || token == undefined || token == 'null' || token == 'undefined') {
      return false;
    }
    return true;
  }
}
