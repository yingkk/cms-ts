export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async _test({ rootState }: any, payload: unknown) {
      return await rootState.axios.post(rootState.api.TEST, payload);
    }
  }
};
