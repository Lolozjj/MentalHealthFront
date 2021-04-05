import Vue from 'vue'
import Vuex from 'vuex'

import router from '@/router/index.js'
Vue.use(Vuex)


const adminTabs = {
  curTabsValue: "0",
  tabsSum: 0,
  allTabs: [],
}

export default new Vuex.Store({
  state: {
    adminTabs
  },
  mutations: {
    addTabs(state, tabItem) {
      let tabNames = state.adminTabs.allTabs.map(
        (tab) => tab.name
      );
      if (tabNames.indexOf(tabItem.name) == -1) { //如果还没有就添加
        state.adminTabs.allTabs.push(tabItem);
        state.adminTabs.tabsSum++;
        state.adminTabs.curTabsValue = tabItem.path;
      } else {
        state.adminTabs.allTabs.forEach((element, index) => {
          if (element.path == tabItem.path) {
            state.adminTabs.curTabsValue = element.path;
          }
        });
      }
      router.push(tabItem.path);
    },
    removeTabs(state, path) {
      let i = -1
      state.adminTabs.allTabs.forEach((element, index) => {
        if (element.path == path) {
          i = index;
        }
      });
      if (i != -1) {
        state.adminTabs.allTabs.splice(i, 1);
      }
    },
    setCurTabsValue(state, value) {
      state.adminTabs.curTabsValue = value + "";
    }
  }
});
