import { Home, Romms, Photos,Reservation, Form }
  from './app/AppContent'
import Login from './Login'

const routese = [
  {
    path: '/login',
    title: 'Login!',
    icon: 'home',
    component: Login
  }
]
////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: '/',
    title: 'Home!',
    icon: 'home',
    exact: true,
    component: Home
  },


  {
    path: '/romms',
    title: 'romms!',
    icon: 'send',
    component: Romms
  },
  {
    path: '/photos',
    title: 'photos!',
    icon: 'send',
    component: Photos
  },
  {
    path: '/reservation',
    title: 'reservation!',
    icon: 'send',
    component: Reservation
  },
  {
    path: '/form',
    title: 'form!',
    icon: 'send',
    component: Form
  },
 
]

export { routes, routese }