import { comentariosService } from '../../../_services'
import { router } from '../../../_helpers'

export default {
  getAll ({ commit }) {
    commit('getAllRequest')
    comentariosService.getAll()
      .then(
        comentarios => commit('getAllSuccess', comentarios),
        error => commit('getAllFailure', error)
      )
  },
}
