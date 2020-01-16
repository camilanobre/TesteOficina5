export default {

  getAllRequest (state) {
    state.all = {
      items: []
    }
  },
  getAllSuccess (state, posts) {
    state.all = { items: posts }
  },
  getAllFailure (state, error) {
    state.all = { error }
  },
  getPorIdRequest (state) {
    state.all = { loading: true }
  },
  getPorIdSuccess (state, posts) {
    state.all = { items: posts }
  },
  getPorIdFailure (state, error) {
    state.all = { error }
  },

  registerRequest (state, posts) {
    state.status = { registering: true }
  },
  registerSuccess (state, posts) {
    state.status = {}
  },
  registerFailure (state, posts) {
    state.status = {}
  },
  deleteRequest (state, id) {
    state.all.items = state.all.items.map(posts =>
      posts.idPosts === id
        ? { ...posts, deleting: true }
        : posts
    )
  },
  deleteSuccess (state, id) {
    state.all.items = state.all.items.filter(posts => posts.iPosts !== id)
  },
  deleteFailure (state, { id, error }) {
    state.all.items = state.items.map(posts => {
      if (posts.idPosts === id) {
        const { deleting, ...postsCopy } = posts
        return { ...postsCopy, deleteError: error }
      }
      return posts
    })
  }
}
