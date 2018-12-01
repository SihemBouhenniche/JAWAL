// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {store} from './store'
import DateFilter from './filters/date'
import Alert from './components/shared/Alert.vue'
import * as firebase from 'firebase'

Vue.use(Vuetify, { theme: {
  primary: "#42A5F5",
  secondary: "#BBDEFB",
  accent: "#4DB6AC",
  error: "#D50000",
  warning: "#FFEE58",
  info: "#2196f3",
  success: "#4caf50"
}})

Vue.config.productionTip = false
Vue.filter('date',DateFilter)
Vue.component('app-alert',Alert)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBQrMroPSYwmbFZtPMVSzFgL6JvAwKdoN8',
      authDomain: 'jawal-2a94f.firebaseapp.com',
      databaseURL: 'https://jawal-2a94f.firebaseio.com',
      projectId: 'jawal-2a94f',
      storageBucket: 'jawal-2a94f.appspot.com',
    })
    firebase.auth().onAuthStateChanged((user)=> {
      // handle it
        if(user){
           this.$store.dispatch('autoLogIn',user)
        }
    })
    this.$store.dispatch('loadJourneys')
    
  }

})
