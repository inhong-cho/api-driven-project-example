import Vue from 'vue'
import Router from 'vue-router'
import GameList from '@/components/GameList'
import StreamList from '@/components/StreamList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: GameList
    },
    {
      path: '/game/:gameId',
      component: StreamList
    }
  ]
})
