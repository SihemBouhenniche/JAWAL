<template>
  <v-app dark>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      fixed
      class="hidden-md-and-up"
      style = "z-index: 10"
    >
      <v-list>
        <v-list-tile @click="" v-for = "item in items" :key = "item.title" router :to = "item.link">
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="onLogOut" v-if = "userIsAuthenticated">
          <v-list-tile-content>
            <v-list-tile-title>Log Out</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app style = "z-index: 6">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title >
        <router-link to = "/" tag = "span" style = "cursor: pointer; font-family: 'Bangers'!important; font-size: 1.5em;" v-text="title" class = "blue--text"></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for = "item in items" :key = "item.title" router :to = "item.link">
          <v-icon left class = "blue--text">{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
        <v-btn flat @click="onLogOut" v-if = "userIsAuthenticated">
          <v-icon left class = "blue--text">fas fa-ellipsis-v</v-icon>
          Log Out
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content >
      <router-view/>
    </v-content>
    <v-footer
      height="auto"
      
    >
      <v-layout
        justify-center
        row
        wrap
      >
        <v-btn
          v-for="link in links"
          :key="link.content"
          color="white"
          flat
          round
          router 
          :to = "link.link"
        >
          {{ link.content }}
        </v-btn>
        <v-flex
          black
          lighten-2
          py-3
          text-xs-center
          white--text
          xs12
        >
          &copy;2018 — <strong>Jawal</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      links: [
        {
          content : 'About Us',
          link : '/Descriptions/AboutUs'
        },
        {
          content : 'Parteners',
          link : '/Descriptions/Parteners'
        },
        {
          content : 'Contact Us',
          link : '/Descriptions/ContactUs'
        },
      ],
      title: 'JAWAL'
    }
  },
  methods : {
    onLogOut(){
      this.$store.dispatch('logOut')
    }
  },
  computed : {
    userIsAuthenticated(){
      return (this.$store.getters.user != null && this.$store.getters.user != undefined)
    },
    items () {
      if (this.userIsAuthenticated) {
        return [
          {
            icon: 'fas fa-ellipsis-v',
            title: 'Create journey',
            link : '/journeys/createjourney'
          },
          {
            icon: 'fas fa-ellipsis-v',
            title: 'View journeys',
            link : '/journeys/journeys'
          },
          {
            icon: 'fas fa-ellipsis-v',
            title: 'Profile',
            link : '/user/profile'
          },
        ]
      }else{
        return [
          {
            icon: '',
            title: 'Log In',
            link : '/user/login'
          },
          {
            icon: 'fas fa-ellipsis-v',
            title: 'Sign Up',
            link : '/user/signup'
          },
        ]
      }
    },
    loading (){
      return this.$store.getters.loading
    }
  },
  name: 'App'
}
</script>