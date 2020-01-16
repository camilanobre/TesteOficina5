import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home'
import Posts from '../views/posts/PostsPage'
import CriarPostPage from '../views/posts/CriarPostPage'
import DetalharPosts from '../views/posts/DetalharPostPage'
import Comentarios from '../views/comentarios/ComentariosPage'
import DetalharComentarios from '../views/comentarios/DetalharComentarioPage'
import Albuns from '../views/albuns/AlbunsPage'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Início', component: Home },
    { path: '/posts', component: Posts },
    { path: '/criarPosts', component: CriarPostPage },
    { path: '/detalharPosts', component: DetalharPosts },
    { path: '/comentarios', component: Comentarios },
    { path: '/detalharComentarios', component: DetalharComentarios },
    { path: '/albuns', component: Albuns }
  ]
})

