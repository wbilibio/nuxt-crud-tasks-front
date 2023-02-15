export const state = () => ({
  list: [],
  user: ''
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setUsers(state, users) {
    state.list = users
  },
  deleteUser(state, userId) {
    state.list = state.list.filter((user) => user.id !== userId)
  }
}

export const actions = {
  async listUsers({ commit }) {
    const { data } = await this.$axios.get(process.env.baseApiUrl + "/user/list");
    commit('setUsers', data.list);
    return data.list;
  },
  async getUser({ commit }, id) {
    const { data } = await this.$axios.get(process.env.baseApiUrl + "/user/get/" + id);
    commit('setUser', data.user);
    return data.user;
  },
  async deleteUser({ commit }, id) {
    const { data } = await this.$axios.delete(process.env.baseApiUrl + '/user/delete/' + id);
    if (data.status === 'success') {
      commit('deleteUser', id);
    }

    return data;
  },
}

export const getters = {

}
