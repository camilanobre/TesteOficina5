<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout wrap>
  <v-flex
    md12
    sm12
    lg12>
    <material-card
      color="#FFB300"
      title="Cadastro de Post">
<v-form
    ref="form"
    v-model="valid"
    lazy-validation>
    <strong>Informe o ID de usuário: </strong>
    <v-text-field
    v-model="post.userId"
    required/>
    <strong>Informe o título: </strong>
    <v-text-field
    v-model="post.title"
    required/>
    <strong>Informe o conteúdo do post: </strong>
    <v-text-field
    v-model="post.body"
    required/>
        <v-btn
    :disable="!valid"
    color="success"
    @click="handleSubmit">
    <v-icon left>
    mdi-plus
    </v-icon>
    Cadastrar
</v-btn>
        <v-btn
    color="danger"
    to="/posts">
    <v-icon left>
    mdi-cancel
    </v-icon>
    Cancelar
</v-btn>
</v-form>
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
      textoCadastro: 'Cadastrado com sucesso!',
      timeout: 4000,
      valid: true,
      snackbar: false,
      post: {
        id: '',
        userId: '',
        title: '',
        body: ''
      },
    }
  },
  computed:{
      ...mapState({
          posts: state => state.posts.all.items
      }),
  },
  created () {
  },
  methods: {
      ...mapActions('posts', {
          register: 'register'
      }),
      ...mapActions('editPost', {
      getEdit: 'getEdit',
      getView: 'getView'
    }),
    handleSubmit () {
        this.snackbar = true
        this.register(this.posts)
        .then(
            this.snackbar = true,
            this.$refs.form.reset()
        )
    }
  }
}
</script>
