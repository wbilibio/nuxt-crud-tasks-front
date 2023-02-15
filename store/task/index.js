export const state = () => ({
  list: [],
  task: ''
})

export const mutations = {
  setTask(state, task) {
    state.task = task
  },
  setTasks(state, tasks) {
    state.list = tasks
  },
  deleteTask(state, taskId) {
    state.list = state.list.filter((task) => task.id !== taskId)
  }
}

export const actions = {
  async listTasks({ commit }) {
    const { data } = await this.$axios.get(process.env.baseApiUrl + "/task/list");
    commit('setTasks', data.list);
    return data.list;
  },
  async getTask({ commit }, id) {
    const { data } = await this.$axios.get(process.env.baseApiUrl + "/task/get/" + id);
    commit('setTask', data.task);
    return data;
  },
  async deleteTasks({ commit }, id) {
    const { data } = await this.$axios.delete(process.env.baseApiUrl + '/task/delete/' + id);
    if (data.status === 'success') {
      commit('deleteTask', id);
    }

    return data;
  },
}

export const getters = {

}
