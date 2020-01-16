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
      title="Visualizar Comentário">
<tr>
    <td>ID DE POST: {{ comentario.postId}} </td>
</tr>
<tr>
    <td>TÍTULO DE COMENTÁRIO: {{ comentario.name}} </td> 
</tr>
<tr>
    <td>E-MAIL : {{ comentario.email}} </td> 
</tr>
<tr>
    <td>CONTEÚDO : {{ comentario.body}} </td> 
</tr>
<v-btn
    color="danger"
    to="/comentarios">
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
      comentario: {
        postId: this.$store.state.editComentario.comentarioEdit.postId,
        id: this.$store.state.editComentario.comentarioEdit.id,
        name: this.$store.state.editComentario.comentarioEdit.name,
        email: this.$store.state.editComentario.comentarioEdit.email,
        body: this.$store.state.editComentario.comentarioEdit.body
      },
    }
  },
  computed: {
    ...mapState({
      editComentario: state => state.editComentario.comentarioEdit
    })
  }
}
</script>
