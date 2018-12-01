<template>
	<div style="margin: 0">
		<v-parallax :src="getImgUrl('background.jpg')" height="300">
	    </v-parallax>
		<v-layout row wrap>
			<v-flex xs12>
		            <v-img 
		                :src="user.profilePhoto" 
		                class="rounded" 
		                height = "200"
		                width = "200"
		            />
			</v-flex>
		</v-layout>
		<v-layout row wrap align-center justify-center >
			<v-flex xs12 style = "margin-top: 125px; text-align: center;" >
				<h1 class="headline mb-0 blue--text font-italic"> {{user.name}}</h1>
				<div class="font-weight-medium font-italic"> {{user.email}} </div>
			</v-flex>
		</v-layout>
		<v-divider></v-divider>
		<v-layout row wrap align-center justify-center >
			<v-flex xs12 style = "margin-top: 20px; text-align: center;" >
				<h1 class="headline mb-0 blue--text font-italic"> Registred Journeys</h1>
			</v-flex>
		</v-layout>
		<v-layout row>
			<v-flex xs12 align-center justify-center >
				<v-card style = "margin: 15px;">
      				<v-container
        				fluid
        				grid-list-lg
      				>
				        <v-layout row wrap>
				          	<v-flex xs12>
					            <v-card color="cyan darken-2" class="white--text">
					              	<v-layout row wrap>
						                <v-flex xs12 sm4>
						                  	<v-img
						                    	src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
						                    	height="150px"
						                  	></v-img>
						                </v-flex>
						                <v-flex xs12 sm8>
						                  	<v-card-title primary-title>
						                    	<div>
						                      		<div class="headline">Supermodel</div>
						                      		<div>Foster the People</div>
						                      		<div>(2014)</div>
						                    	</div>
						                  	</v-card-title>
						                </v-flex>
					              	</v-layout>
					              	<v-divider light></v-divider>
						            <v-card-actions class="pa-3">
						                Rate this album
						                <v-spacer></v-spacer>
						                <v-icon>star_border</v-icon>
						                <v-icon>star_border</v-icon>
						                <v-icon>star_border</v-icon>
						                <v-icon>star_border</v-icon>
						                <v-icon>star_border</v-icon>
						            </v-card-actions>
					            </v-card>
				          	</v-flex>
				        </v-layout>
      				</v-container>
    			</v-card>
			</v-flex>
		</v-layout>
	</div>
</template>
<script>
	export default {
		methods : {
			getImgUrl(img) {
	        	return require('../../assets/' + img)
		    }
		},
		computed : {
	    	user () {
	    		return this.$store.getters.user
	    	}
	    }
	}
</script>
<style>
	.rounded{
		display: inline-block;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 200px;
		border-radius: 150px;
		border: solid #fff;
	}
</style>