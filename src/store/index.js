import { createStore } from 'vuex'

export default createStore({
  state: {
    employees: [],
    employee: '',
  },

  mutations: {
    ADD_EMPOLYEE(state, payload) {
      state.employees.push(payload)
    },

    FETCH_EMPLOYEES(state, payload) {
      state.employees = payload
    }
  },

  actions: {
    async fetchEmployees({ commit }) {
      try {
        const response = await fetch(
          'https://emergentlabs-api.herokuapp.com/api/v1/employees',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        const data = await response.json()
        commit('FETCH_EMPLOYEES', data.employees)
      } catch (error) {
        console.log(error)
      }
    },

    async addEmployee({ commit }, payload) {
      try {
        const response = await fetch(
          'https://emergentlabs-api.herokuapp.com/api/v1/employees',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: payload
          },
        )
        commit('ADD_EMPLOYEE', response)
      } catch (error) {}
    },
  },
  getters: {},
})
