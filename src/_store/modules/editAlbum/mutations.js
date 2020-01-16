import { router } from '../../../_helpers'

export default {
  getView (state, albuns) {
    state.albumEdit = albuns
    router.push('/detalharAlbuns')
  },

  registerRequest (state, albuns) {
    state.status = { registering: true }
  },
  registerSuccess (state, albuns) {
    state.status = {}
  },
  registerFailure (state, albuns) {
    state.status = {}
  }

}
