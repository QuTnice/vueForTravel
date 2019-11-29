import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collect: []
  },
  mutations: {
    collectInfoAdd: (state, all) => {
      let mid = false
      if (state.collect.length) {
        for (let i = 0; i < state.collect.length; i++) {
          if (all[0] === state.collect[i].id) {
            // console.log('数据已存在');
            mid = true
          }
        }
        if (mid == false) {
          state.collect.push({
            id: all[0], name: all[1], price: all[2], img: all[3]
          })
        }
      } else {
        state.collect.push({
          id: all[0], name: all[1], price: all[2], img: all[3]
        })
      }
      // console.log('添加的方法');
      // console.log(state.collect);
    },
    collectInfoMinus: (state, index) => {
      state.collect.splice(index, 1)
      // console.log('删除的方法');
      // console.log(state.collect);
    }

  },
  actions: {
  },
  modules: {
  }
})
