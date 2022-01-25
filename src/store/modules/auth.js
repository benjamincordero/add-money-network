const state = {
  user: null,
};
const getters = {
  isAuthenticated: (state) => !!state.user,
  StateUser: (state) => state.user,
};
const actions = {
  async LogIn({ commit }, user) {
    await commit("setUser", user);
  },
  async LogOut({ commit }) {
    let user = null;
    commit("LogOut", user);
  },
};
const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  LogOut(state) {
    state.user = null;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
