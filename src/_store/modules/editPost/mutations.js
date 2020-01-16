import { router } from '../../../_helpers'

export default {
  getEdit (state, posts) {
    state.postEdit = posts
    router.push('/editarPosts')
  },
  getView (state, posts) {
    state.postEdit = posts
    router.push('/detalharPosts')
  },

  registerRequest (state, posts) {
    state.status = { registering: true }
  },
  registerSuccess (state, posts) {
    state.status = {}
  },
  registerFailure (state, posts) {
    state.status = {}
  }

}
