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
          title="Comentários"
        >
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Pesquisar por comentário..."
              single-line
              hide-details
            />
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="comentarios"
            :search="search"
            :options.sync="pagination"
            :items-per-page-text="textoPaginacao"
            hide-default-footer
            class="elevation-1"
          >
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
                  Não há comentarios cadastrados :(
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
      comentario: {
        postId: '',
        id: '',
        name: '',
        email:'',
        body: ''
      },
      headers: [
        {
          text: 'Comentários',
          align: 'left',
          value: 'name'
        },
        { text: 'Detalhar', align: 'center', value: 'view', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState({
      comentarios: state => state.comentarios.all.items
    }),
    ...mapState({
      editComentario: state => state.editComentario.comentarioEdit
    }),
    ...mapState({
      account: state => state.account
    }),
    pages () {
      try {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.pagination.totalItems = this.comentarios.length
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
    ...mapActions('comentarios', {
      getAll: 'getAll',
    }),
    ...mapActions('editComentario', {
      getView: 'getView'
    }),
    callFunction: function () {
      var v = this
      setTimeout(function () {
        v.stopLoading = false
      }, 3000)
    }
  }
}
</script>