<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        md12
        sm12
        lg12 >
        <material-card
          color="#F9A825"
          title="Posts"
        >
           <v-btn
            color="#F9A825"
            to="/criarPosts"
          >
            <v-icon left>mdi-plus-circle</v-icon>
            Novo Post
          </v-btn> 
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Pesquisar por título..."
              single-line
              hide-details
            />
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="posts"
            :search="search"
            :options.sync="pagination"
            :items-per-page-text="textoPaginacao"
            hide-default-footer
            class="elevation-1"
          >
            <template v-slot:item.edit="{ item }">
              <v-btn
                text
                icon
                large
                color="info"
                @click="getEdit(item)"
              >
                <v-icon >mdi-pencil</v-icon>
              </v-btn>
            </template>
            <template v-slot:item.delete="{ item }">
              <v-btn
                text
                icon
                large
                color="error"
                @click="openModalDelete(item.title, item.id)"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </template>
            <template v-slot:item.view="{ item }">
              <div class="text-center">
                <v-btn
                  text
                  icon
                  large
                  color="black"
                  @click="getView(item)">
                  <v-icon>mdi-magnify-plus</v-icon>
                </v-btn>
              </div>
            </template>
            <template v-slot:no-data>
              <div v-if="stopLoading">
                <v-progress-linear
                  :indeterminate="true"
                  background-color="#FFB300"
                  color="primary"
                />
              </div>
              <div v-else>
                <v-alert
                  :value="true"
                  color="#FFB300"
                  icon="mdi-alert"
                >
                  Não há posts cadastrados :(
                </v-alert>
              </div>
            </template>
            <template v-slot:no-results>
              <v-alert
                :value="true"
                color="error"
                icon="mdi-alert"
              >
                Você pesquisou por "{{ search }}", porém nenhum resultado foi encontrado.
              </v-alert>
            </template>
          </v-data-table>
          <div class="text-xs-center pt-2">
            <v-pagination
              v-model="pagination.page"
              :length="pages"
              :total-visible="5"
              circle
            />
          </div>
        </material-card>
      </v-flex>
      <v-dialog
        v-model="modalDelete"
        persistent
        max-width="600"
      >
        <v-card>
          <v-card-title
            color="#F9A825"
            primary-title
          >
            O projeto será excluído!</v-card-title>
          <v-card-text style="font-size:17px !important"><br>
            Tem certeza que deseja excluir o post ?
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn
              text
              color="blue darken-1"
              @click="deletar(id)"
            >
              Sim
              <v-icon>
                mdi-check
              </v-icon>
            </v-btn>
            <v-btn
              text
              color="red darken-1"
              @click="modalDelete = false"
            >
              Não
              <v-icon>
                mdi-close
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      textoPaginacao: 'Exibir',
      stopLoading: true,
      modalEdit: false,
      modalDelete: false,
      pagination: {
        descending: false,
        page: 1,
        rowsPerPage: 5,
        totalItems: 0
      },
      timeout: 4000,
      search: '',
      post: {
        userId: '',
        id: '',
        title: '',
        body: ''
      },
      headers: [
        {
          text: 'Posts',
          align: 'left',
          value: 'title'
        },
        { text: 'Editar', align: 'center', value: 'edit', sortable: false },
        { text: 'Excluir', align: 'center', value: 'delete', sortable: false },
        { text: 'Detalhar', align: 'center', value: 'view', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState({
      posts: state => state.posts.all.items
    }),
    ...mapState({
      account: state => state.account
    }),
    ...mapState({
      editPost: state => state.editPost.postEdit
    }),
    pages () {
      try {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.pagination.totalItems = this.posts.length
        if (this.pagination.totalItems !== undefined) {
          if (this.pagination.rowsPerPage == null || this.pagination.totalItems == null) {
            return 0
          }
          return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
        }
      } catch (e) {
      }
    }
  },
  created () {
    this.getAll()
  },
  mounted () {
    this.callFunction()
  },
  methods: {
    ...mapActions('posts', {
      getAll: 'getAll',
      delete: 'delete'
    }),
    ...mapActions('editPost', {
      getView: 'getView'
    }),
    openModalDelete (title, id) {
      this.title = title
      this.id = id
      this.modalDelete = true
    },
    deletar (id) {
      this.delete(id)
      this.modalDelete = false
    },

    callFunction: function () {
      var v = this
      setTimeout(function () {
        v.stopLoading = false
      }, 3000)
    }
  }
}
</script>