import { albunsService } from '../../../_services'
import { router } from '../../../_helpers'
export default {
  getView ({ commit }, albuns) {
    commit('getView', albuns)
  },
  update ({ dispatch, commit }, albuns) {
    commit('registerRequest', albuns)
    albunsService.update(albuns)
      .then(
        albuns => {
          commit('registerSuccess', albuns)
          router.push('/albuns')
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
