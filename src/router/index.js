import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Journeys from '@/components/Journeys/Journeys'
import CreateJourney from '@/components/Journeys/CreateJourney'
import Journey from '@/components/Journeys/Journey'
import Profile from '@/components/User/Profile'
import SignUp from '@/components/User/SignUp'
import LogIn from '@/components/User/LogIn'
import AboutUs from '@/components/Descriptions/AboutUs'
import Team from '@/components/Descriptions/Team'
import ContactUs from '@/components/Descriptions/ContactUs'
import Parteners from '@/components/Descriptions/Parteners'
import AuthGard from './auth-gard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path : '/journeys/journeys',
    	name : 'Journeys',
    	component : Journeys
    },
    {
    	path : '/journeys/createjourney',
    	name : 'CreateJourney',
    	component : CreateJourney,
    	beforeEnter : AuthGard
    },
    {
    	path : '/journeys/:id',
    	props : true,
    	name : 'Journey',
    	component : Journey
    },
    {
    	path : '/user/signup',
    	name : 'SignUp',
    	component : SignUp
    },
    {
    	path : '/user/login',
    	name : 'LogIn',
    	component : LogIn,
    },
    {
    	path : '/user/profile',
    	name : 'Profile',
    	component : Profile,
    	beforeEnter : AuthGard
    },
    {
        path : '/Descriptions/AboutUs',
        name : 'AboutUs',
        component : AboutUs
    }
    ,
    {
        path : '/Descriptions/Team',
        name : 'Team',
        component : Team
    },
    {
        path : '/Descriptions/ContactUs',
        name : 'ContactUs',
        component : ContactUs
    },
    {
        path : '/Descriptions/Parteners',
        name : 'Parteners',
        component : Parteners
    }
  ]
})
