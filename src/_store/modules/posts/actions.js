import { postsService } from '../../../_services'
import { router } from '../../../_helpers'

export default {
  getAll ({ commit }) {
    commit('getAllRequest')
    postsService.getAll()
      .then(
        posts => commit('getAllSuccess', posts),
        error => commit('getAllFailure', error)
      )
  },
 getPorId ({ commit }, id) {
    commit('getPorIdRequest')
    postsService.getPorId(id)
      .then(
        posts => commit('getPorIdSuccess', posts),
        error => commit('getPorIdFailure', error)
      )
  },
  update ({ dispatch, commit }, posts) {
    commit('registerRequest', posts)
    postsService.update(posts)
      .then(
        posts => {
          commit('registerSuccess', posts)
          setTimeout(() => {
            dispatch('alert/success', 'Registration successful', { root: true })
            commit('getAllRequest')
            postsService.getAll()
              .then(
                postss => commit('getAllSuccess', postss),
                error => commit('getAllFailure', error)
              )
          })
        },
        error => {
          commit('registerFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  register ({ dispatch, commit }, posts) {
    commit('registerRequest', posts)
    postsService.register(posts)
      .then(
        posts => {
          commit('registerSuccess', posts)
          router.push('/posts')
          setTimeout(() => {
            dispatch('alert/success', 'Registration successful', { root: true })
          })
        },
        error => {
          commit('registerFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  delete ({ commit }, id) {
    commit('deleteRequest', id)

    postsService.delete(id)
      .then(
        posts => commit('deleteSuccess', id),
        error => commit('deleteSuccess', { id, error: error.toString() })
      )
  }
}
