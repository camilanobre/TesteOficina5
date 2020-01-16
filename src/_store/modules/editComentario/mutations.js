import { router } from '../../../_helpers'

export default {
  getView (state, comentarios) {
    state.comentarioEdit = comentarios
    router.push('/detalharComentarios')
  },

  registerRequest (state, comentarios) {
    state.status = { registering: true }
  },
  registerSuccess (state, comentarios) {
    state.status = {}
  },
  registerFailure (state, comentarios) {
    state.status = {}
  }

}
