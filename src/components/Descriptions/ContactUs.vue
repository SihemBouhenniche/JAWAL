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
			        <v-divider></v-divider>
			        <v-card-text >
			        	<form @submit.prevent = "onCreatJourney">
			        		<div >
			        			<v-layout row wrap>
				        			<v-flex xs12 sm6 offset-sm3>
				        				<v-text-field
								            label="Name"
								            name = "name"
								            id = "name"
								            required
								            v-model = "name"
								        ></v-text-field>
				        			</v-flex>
				        		</v-layout>
				        		<v-layout row wrap>
				        			<v-flex xs12 sm6 offset-sm3>
								        <v-text-field
								            label="Email"
								            name = "email"
								            id = "email"
								            required
								            v-model = "email"
								        ></v-text-field>
				        			</v-flex>
				        		</v-layout>
				        		<v-layout row wrap>
				        			<v-flex xs12 sm6 offset-sm3>
				        				<v-textarea
								            label="Comment"
								            name = "comment"
								            id = "comment"
								            required
								            v-model = "comment"
								        ></v-textarea>
				        			</v-flex>
				        		</v-layout>
				        		<v-layout row wrap>
				        			<v-flex xs12 sm6 offset-sm3>
				        				<v-btn color = "primary">Send</v-btn>
				        			</v-flex>
				        		</v-layout>
			        		</div>
			        	</form>
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
      	title : 'Contact Us',
      	citation : "Got a question? we'd love to hear from you. send us a message we'll respond as soon as possible",
      	name : '',
      	comment:'',
      	email :''
      }
    },
    methods : {
    	
    },
    watch: {
      
    },
    computed : {
    	    
    }
  }
</script>