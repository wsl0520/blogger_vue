import Vue from 'vue'
import Router from 'vue-router'
import NavigationBarPage from '@/components/NavigationBarPage'
import IndexPage from '@/components/IndexPage'
import BottomPage from '@/components/BottomPage'
import NoteListPage from '@/components/NoteListPage'
import AboutMePage from '@/components/AboutMePage'
import TopPage from '@/components/TopPage'
import ProjectDetail from '@/components/ProjectDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/nav',
      name: 'NavigationBarPage',
      component: NavigationBarPage
    },
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/boo',
      name: 'BottomPage',
      component: BottomPage
    },
    {
      path: '/notelist',
      name: 'NoteListPage',
      component: NoteListPage
    },
    {
      path: '/about',
      name: 'AboutMePage',
      component: AboutMePage
    },
    {
      path: '/top',
      name: 'TopPage',
      component: TopPage
    },
    {
      path: '/projectDetail',
      name: 'ProjectDetail',
      component: ProjectDetail
    }
  ]
})