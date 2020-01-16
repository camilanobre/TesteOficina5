export default {

  getAllRequest (state) {
    state.all = {
      items: []
    }
  },
  getAllSuccess (state, albuns) {
    state.all = { items: albuns }
  },
  getAllFailure (state, error) {
    state.all = { error }
  }
}
