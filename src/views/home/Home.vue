<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      align-center
      column
    >
      <v-container
        grid-list-md
        text-xs-center
      >
        <v-layout
          row
          wrap
        >
          <v-flex
            xl12
            lg12
            md12
            sm12
            xs12
          >
            <v-card
              dark
              color="#F9A825 "
            >
              <v-card-text>
                <v-list-item-title
                  class="subtitle-1"
                  style="color: white; text-align: center;"
                >
                  Bem vindo(a)!
                </v-list-item-title>
                <v-list-item-title
                  class="subtitle-2"
                  style="color: white; text-align: center;"
                >
                  {{ nomeUsuario }}
                </v-list-item-title>
              </v-card-text>
            </v-card>
            <v-parallax
              height="300"
              src="https://cdn.dribbble.com/users/827256/screenshots/4695854/vector.jpg"
            />
            <v-spacer style="padding-top: 50px;"/>
            <template>
              <v-container
                grid-list-md
                text-center>
                <v-layout wrap>
                  <v-hover v-slot:default="{ hover }">
                    <v-card
                      :elevation="hover ? 12 : 2"
                      :flat="flat"
                      :loading="loading"
                      :outlined="outlined"
                      :raised="raised"
                      :width="width"
                      :height="height"
                      class="mx-auto"
                      max-width="350"
                    >
                      <v-img
                        v-if="media"
                        class="white--text"
                        height="200px"
                        src="./img/home1.jpg"
                      />
                      <v-card-text style="text-align: justify">
                        Esse é o teste realizado por Camila Nobre Siqueira de Morais para a Oficina 5. Realizado no Bloco Alpha
                        do Unipam, no dia 16/01/2020. <br><br><br>
                      </v-card-text>
                    </v-card>
                  </v-hover>
                  <v-hover v-slot:default="{ hover }">
                    <v-card
                      :elevation="hover ? 12 : 2"
                      :flat="flat"
                      :loading="loading"
                      :outlined="outlined"
                      :raised="raised"
                      :width="width"
                      :height="height"
                      class="mx-auto"
                    >
                      <v-img
                        v-if="media"
                        class="white--text"
                        height="200px"
                        src="./img/home2.png"
                      />
                      <v-card-text style="text-align: justify">
                        A Oficina 5 é  uma fábrica de software especialista em 
                        desenvolvimento de soluções web/mobile inteligentes.
                        Juntamos todo o poder dos dados, da computação em nuvem e da 
                        inteligência artificial para transformar problemas em solução, entregando valor à todo instante.
                      </v-card-text>
                    </v-card>
                  </v-hover>
                </v-layout>
              </v-container>
            </template>
          </v-flex>
        </v-layout>

      </v-container>
      <v-footer>
        <div class="flex-grow-1"/>
        <div>&copy; Teste Oficina 5 -{{ new Date().getFullYear() }}</div>
      </v-footer>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      show: false,
      nomeUsuario: '',
      idUsuario: '',
      flat: false,
      media: true,
      loading: false,
      actions: true,
      outlined: false,
      elevation: undefined,
      raised: false,
      width: 344,
      height: undefined
    }
  },
  computed: {
    ...mapState({
      account: state => state.account
    })
  },
  created () {
    this.NomeDoUsuario()
    this.getUsuarioStorage()
  },
  methods: {
    getUsuarioStorage () {
      let usuario = JSON.parse(localStorage.getItem('usuario'))
      this.usuario = usuario.value
    },
    NomeDoUsuario () {
      if (
        this.account !== null ||
        this.account.user !== null ||
        this.account !== '' ||
        this.account.user !== ''
      ) {
        this.account.user = JSON.parse(localStorage.getItem('usuario'))
        this.nomeUsuario = this.account.user.value.nome
      }
    }
  }
}
</script>

<style scoped>
  .v-input__slider {
    width: 100%;
  }
.container {
}
</style>
