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
      	title : 'TEAM',
      	citation : 'When you learn how to work together versus agnaist each other things might start getting better',
      	description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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