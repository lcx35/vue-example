import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Admin from './components/Admin.vue'
import About from './components/about/About.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

//二级路由
import Contact from './components/about/Contact.vue'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

export const routes = [
    {
    path: '/',
    name: 'homeLink',
    components: 
    {
        default:Home,
        'orderingGuide':OrderingGuide,
        'delivery':Delivery,
        'history':History
    }
  },
  {
    path: '/menu',
    name: 'menuLink',
    component: Menu
  },
  {
    path: '/admin',
    name: 'adminLink',
    component: Admin
  },
  {
    path: '/about',
    name: 'aboutLink',
    component: About,
    redirect:'/about/contact',
    children: [{
        path: '/about/contact',
        name: 'contactLink',
        component: Contact,
        children: [{
            path: '/about/contact/phone',
            name: 'phoneLink',
            component: Phone
          },
          {
            path: '/about/contact/personname',
            name: 'personnameLink',
            component: PersonName
          },
        ]
      },
      {
        path: '/history',
        name: "historyLink",
        component: History
      },
      {
        path: '/delivery',
        name: "deliveryLink",
        component: Delivery
      },
      {
        path: '/orderingGuide',
        name: "orderingGuideLink",
        component: OrderingGuide
      },
    ]
  },
  {
    path: '/login',
    name: 'loginLink',
    component: Login
  },
  {
    path: '/register',
    name: 'registerLink',
    component: Register
  },
  {
    path: '*',
    redirect: '/'
  },
]