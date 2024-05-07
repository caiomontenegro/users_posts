export const state = () => ({
  statePost: {
    title:'',
    content: '',
    author: ''
  }
})

export const getters = {
  getStatePost(state) {
    return state.statePost
  }
}

export const mutations = {
  updatePost(state, payload) {
    console.log(payload)
    state.statePost = payload
  }
}