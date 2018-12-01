<template> 
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>
				<div class="headline" v-if="start"> {{journey.name}} </div>
  				<v-stepper v-model="e1" light v-if="start">
    				<v-stepper-header>
    					<v-stepper-step v-for = "step in journey.steps" :complete="e1 > step.step" :step="step.step">{{step.name}}</v-stepper-step>
    				</v-stepper-header>
    				<v-stepper-items>
      					<v-stepper-content v-for = "step in journey.steps" :key="step.key" :step="step.step">
        					<v-card
					          	class="mb-5"
					          	dark
					        >
					        	<v-card-title>
								    <div>
								        <h3 class="headline mb-0 blue--text font-italic"> {{step.name}} </h3>
								    </div>
								</v-card-title>
					        	<v-img
								    :src="step.imageStep"
								    height = "500"
								></v-img>
					        	<v-card-text primary-title>
								    <div>
								        <div> {{step.history}} </div>
								    </div>
								</v-card-text>
					        </v-card>
        					<v-btn
				          		color="primary"
				          		@click="goNext(step.step)"
				        	>
				          		Continue
				        	</v-btn>
        					<v-btn flat @click="goBack(step.step)">Back</v-btn>
      					</v-stepper-content>
    				</v-stepper-items>
  				</v-stepper>
  				<v-card
					class="mb-5"
		          	dark
		          	v-if = "!start"
			    >
					<v-card-title>
						<div>
							<h3 class="headline mb-0 blue--text font-italic"> {{journey.name}} </h3>
							<div class="font-weight-medium font-italic">Wilaya of {{journey.wilaya}}</div>
							<div>
								<v-icon left>fas fa-clock</v-icon>
								Max duration of this journey is : {{journey.duration}} day(s)
							</div>
						</div>
					</v-card-title>
					 	<v-img
							:src="journey.imageUrl"
							height = "500"
						></v-img>
					<v-card-text primary-title>
						<div>
							<div class="font-weight-medium font-italic">Created the : {{journey.dateOfCreation | date}} by {{journey.creatorId}} </div>
							<v-divider></v-divider>
							<div> {{journey.details}} </div>
						</div>
					</v-card-text>
					<v-card-actions>
					    <v-btn flat color="blue" @click = "onStart">Start Navigation</v-btn>
					</v-card-actions>
				</v-card>
  				<v-layout wrap column justify-center align-center v-if = "reload">
  					<v-flex xs12>
			            <v-btn flat icon color="blue" fab large @click="onRealod">
			              <v-icon>cached</v-icon>
			            </v-btn>
			        </v-flex>
  				</v-layout>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
  export default {
  	props : ['id'],
    data () {
      return {
        e1: 0,
        start : false,
        steps : 0,
      }
    },
    methods : {
    	goNext(step){
    		console.log(step)
    		this.e1 ++
    	},
    	goBack(step){
    		console.log(step)
    		this.e1 --
    	},
    	onRealod(){
    		this.e1 = 1
    	},
    	onStart(){
    		this.start = true
    	},
    },
    computed : {
    	reload (){
    		console.log((this.e1 > this.steps))
    		return (this.e1 > this.steps)
    	},
    	journey (){

    		this.steps = this.$store.getters.loadedJourney(this.id).steps.length
    		console.log(this.$store.getters.loadedJourney(this.id))
    		return this.$store.getters.loadedJourney(this.id)
    	},
    }
  }
</script>