export default {

  getAllRequest (state) {
    state.all = {
      items: []
    }
  },
  getAllSuccess (state, comentarios) {
    state.all = { items: comentarios }
  },
  getAllFailure (state, error) {
    state.all = { error }
  },
}
