import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    isFetchingEmployees: false,
    editedEmployee: {},
    employees: []
  },

  mutations: {
    startLoading(state, loading){
      state.isFetchingEmployees = loading
    },
    stopLoading(state, loading){
      state.isFetchingEmployees = loading
    },
    fetchEmployees(state, employees){
      state.employees = employees
    },
    editEmployeeInfo(state, updatedInfo){
      const  index = state.employees.findIndex(employee => employee.id === updatedInfo.id)
        if(index !== -1){
            state.employees.splice(index, 1, updatedInfo)
        }
    }
  },

  actions: {
    async fetchEmployees({commit}){
      console.log('*******Fetching data*********')
      commit('startLoading', true)
      const resp = await axios.get('https://ti-react-test.herokuapp.com/users')
      console.log("Done")
      commit('fetchEmployees', resp.data)
      commit('stopLoading', false)
    },
    async editEmployeeInfo({commit}, info){
      console.log('*******Editing data*********')
      const resp = await axios.patch(`https://ti-react-test.herokuapp.com/users/${info.id}`, info)
      commit('editEmployeeInfo', resp.data)
      console.log(resp.data)
    }
  },

  getters:{
      allEmployees: (state) => state.employees,
      isFetchingEmployees: (state) => state.isFetchingEmployees
  },

  modules: {
  }
})
