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
    <td>ID DE USUÁRIO: {{ album.userId}} </td>
</tr>
<tr>
    <td>TÍTULO: {{ album.title}} </td> 
</tr>

<v-btn
    color="danger"
    to="/albuns">
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
      album: {
        userId: this.$store.state.editAlbum.albumEdit.userId,
        id: this.$store.state.editAlbum.albumEdit.id,
        title: this.$store.state.editAlbum.albumEdit.title,
      },
    }
  },
  computed: {
    ...mapState({
      editAlbum: state => state.editAlbum.AlbumEdit
    })
  }
}
</script>
