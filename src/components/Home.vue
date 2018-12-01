<template>
  <div style="margin: 0;">
    <v-parallax :src="getImgUrl('background.jpg')" height="600">
        <v-layout
          column
          align-center
          class="white--text">
            <img src="@/assets/logo.png" alt="Vuetify.js" class="mt-5">
            <h1 class="white--text mb-2 display-2 text-xs-center title-div" id="nameApp">JAWAL</h1>
            <div class="subheading mb-3 text-xs-center font-italic">
              <i class="fas fa-quote-left blue--text"></i> When You Travel, We Know The Way <i class="fas fa-quote-right blue--text"></i>
            </div>
            <div style="text-align: center;">
              <v-btn
                class="blue darken-2 mt-5 "
                dark
                large
                to = "/journeys/journeys"
              >
                View Journeys
              </v-btn>
              <v-btn
                class="blue darken-2 mt-5 "
                dark
                large
                to = "/journeys/createjourney"
              >
                Create Journey
              </v-btn>
            </div>
        </v-layout>
    </v-parallax>
  </div>
</template>
<script>
  export default {
    methods: {
      getImgUrl(img) {
        return require('../assets/' + img)
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .titleImage{
    text-align: center;
    font-size: 2em;
    font-family: 'Bangers', cursive;
    color: #fff;
    padding: 10px 20px;
    background-color: rgba(0,0,0,.5);
    margin: auto;
  }
  .logo{
    display:block;
    margin-left:auto;
    margin-right:auto;
    margin-top: 80px;
  }
  .title-div{
    font-family: 'Bangers'!important;
    z-index: 5;
  }
  .sub{
    margin-bottom: 20px;
    z-index: 5;
  }
</style>
