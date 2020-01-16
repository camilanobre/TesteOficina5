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
      title="Visualizar Post">
<tr>
    <td>ID DE USUÁRIO: {{ post.userId}} </td>
</tr>
<tr>
    <td>TÍTULO: {{ post.title}} </td> 
</tr>
<tr>
    <td>CONTEÚDO : {{ post.body}} </td> 
</tr>
<v-btn
    color="danger"
    to="/posts">
    <v-icon left>
    mdi-step-backward
    </v-icon>
    Voltar
</v-btn>
    </material-card>
  </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      post: {
        userId: this.$store.state.editPost.postEdit.userId,
        id: this.$store.state.editPost.postEdit.id,
        title: this.$store.state.editPost.postEdit.title,
        body: this.$store.state.editPost.postEdit.body
      },
    }
  },
  computed: {
    ...mapState({
      editPost: state => state.editPost.postEdit
    })
  }
}
</script>
