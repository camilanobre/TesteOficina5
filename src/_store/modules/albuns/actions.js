import { albunsService } from '../../../_services'
import { router } from '../../../_helpers'

export default {
  getAll ({ commit }) {
    commit('getAllRequest')
    albunsService.getAll()
      .then(
        albuns => commit('getAllSuccess', albuns),
        error => commit('getAllFailure', error)
      )
  }
}
