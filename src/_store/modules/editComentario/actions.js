import { comentariosService } from '../../../_services'
import { router } from '../../../_helpers'
export default {
  getView ({ commit }, comentarios) {
    commit('getView', comentarios)
  },
  update ({ dispatch, commit }, comentarios) {
    commit('registerRequest', comentarios)
    comentariosService.update(comentarios)
      .then(
        comentarios => {
          commit('registerSuccess', comentarios)
          router.push('/comentarios')
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
