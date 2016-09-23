/**
  页头内容 - 更新
**/

// 数据
export default {
  state: {
    title: 'SAAS-BASE',
  },
  mutations: {
    TITLE(state, title) {
      const s = state;
      s.title = title;
    },
  },
};

// 操作
export const headerAction = {
  vuex: {
    getters: {
      headerTitle(state) {
        return state.header.title;
      },
    },
    actions: {
      setHeaderTitle(store, title) {
        store.dispatch('TITLE', title);
      },
    },
  },
};
