<template>
	<v-container>
		<v-layout>
		    <v-flex xs12 class= "text-xs-center">
		    	<v-progress-circular
					:size="70"
				    :width="7"
				    color="blue"
				    indeterminate
				    v-if = "loading"
			    ></v-progress-circular>
		    </v-flex>
		</v-layout>
		<v-layout v-if = "!loading">
		    <v-flex xs12 >
		    	<v-toolbar>
		      		<v-text-field
		        	hide-details
		        	prepend-icon="search"
		        	single-line
		        	label = "Find joureny by name"
		        	v-model = "name"
		        	@input = "journeysByName"
		      		></v-text-field>
		      		<v-text-field
		        	hide-details
		        	prepend-icon="my_location"
		        	single-line
		        	label = "Find joureny by location"
		        	v-model = "wilaya"
		        	@input = "journeysByWilaya"
		      		></v-text-field>
		      		<v-menu offset-y dark>
				      	<v-btn
				        	slot="activator"
				        	icon

				      	>
				        	<v-tooltip bottom>
     							<v-icon
     								slot="activator"
     								dark>fas fa-sliders-h</v-icon>
						      	<span>Display journeys by duration</span>
						    </v-tooltip>
				      	</v-btn>
				      	<v-list>
				        	<v-list-tile
				          		v-for="(item, index) in durations"
				          		:key="index"
				          		@click="journeysByDuration(item)"
				        	>
				          		<v-list-tile-title>{{ item}} day(s)</v-list-tile-title>
				        	</v-list-tile>
				      	</v-list>
				    </v-menu>
		    	</v-toolbar>
		      	<v-card light>
		        	<v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
		          		<v-layout row wrap>
		            		<v-flex
		              			v-for="journey in journeys"
		              			:key="journey.id"
		              			xs12 sm6 md4>
		              			<v-hover>
				              		<v-card style = "margin: 5px;" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" dark > 
								        <v-img
								          :src = "journey.imageUrl"
								          height = "200"
								        ></v-img>
								        <v-card-title primary-title style = "height: 100px">
								          <div>
								            <h3 class="headline mb-0"> {{journey.name}} </h3>
								          </div>
								        </v-card-title>
								        <v-card-actions>
								          <v-btn flat color="blue" :to = "/journeys/+journey.id">View more details</v-btn>  
								          <v-spacer></v-spacer>
								          <v-btn icon @click="show = !show">
								            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
								          </v-btn>
								        </v-card-actions>
								        
								        <v-slide-y-transition>
								          <v-card-text v-show="show">
								            {{journey.details}}
								          </v-card-text>
								        </v-slide-y-transition>
								        <v-rating v-model="rating"></v-rating>
								        </v-card-actions>
								    </v-card>
								</v-hover>
		            		</v-flex>
		          		</v-layout>
		        	</v-container>
		      	</v-card>
		    </v-flex>
  		</v-layout>
	</v-container>
</template>
<script>
  export default {
    data: () => ({
      size : 'sm',
      durations : [1, 2  , 3  ,4  , 5  , 6  , 7 ],
      wilaya : '',
      name : '',
      show : false,
      rating: 2,
    }),
    methods : {
    	journeysByWilaya(){
    		this.$store.dispatch('journeysByWilaya',this.wilaya)
    	},
    	journeysByDuration(duration){
    		this.$store.dispatch('journeysByDuration',duration)
    	},
    	journeysByName(){
    		this.$store.dispatch('journeysByName',this.name)
    	}
    },
    computed : {
    	journeys () {
    		console.log(this.$store.getters.displayedJourneys)
    		return this.$store.getters.displayedJourneys
    	},
    	loading (){
    		return this.$store.getters.loading
    	}
    }
  }
</script>