import { postsService } from '../../../_services'
import { router } from '../../../_helpers'
export default {
  getEdit ({ commit }, posts) {
    commit('getEdit', posts)
  },
  getView ({ commit }, posts) {
    commit('getView', posts)
  },
  update ({ dispatch, commit }, posts) {
    commit('registerRequest', posts)
    postsService.update(posts)
      .then(
        posts => {
          commit('registerSuccess', posts)
          router.push('/posts')
          setTimeout(() => {
            // display success message after route change completes
            dispatch('alert/success', 'Registration successful', { root: true })
          })
        },
        error => {
          commit('registerFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  }
}
