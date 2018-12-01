<template>
	<v-container>
		<v-layout row>
			<v-flex xs12>
				<v-card light>
					<v-card-title class = "blue white--text">
			          <div>
			            <h3 class="headline mb-0"> {{title}} </h3>
			            <div> {{citation}} </div>
			          </div>
			        </v-card-title>
					<v-img
			          :src="getImgUrl('team.jpg')"
			        ></v-img>
			        <v-divider></v-divider>
			        <v-card-text >
			        	{{description}}
			        </v-card-text>
			    </v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
  export default {
    data () {
      return {
      	title : 'JAWAL',
      	citation : 'When You Travel, We Know The Way',
      	description : 'JAWAL is a tourist web application, it aims to make known the most beautiful places, landscapes and places of our dear country Algeria.The idea is that any person can become a blogger and participate in the improvement of tourism in Algeria, through a proposed route that will be after a challenge to be accomplished, each person can create a route with up to 6 locations , and accompany each stop with a photo of the place of his choice with a written of his own experience, this route will become like a story book to tell.',
      }
    },
    methods : {
    	getImgUrl(img) {
	        	return require('../../assets/' + img)
		}
    },
    watch: {
      
    },
    computed : {
    	
    }
  }
</script>