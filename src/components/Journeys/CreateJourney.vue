<template>
	<v-container>
		<v-layout row>
			<v-flex xs12>
				<v-card light>
			        <v-card-title class = "blue white--text">
			          <div>
			            <h3 class="headline mb-0">Create A Journey</h3>
			            <div>Fill out the following form to create a new journey</div>
			          </div>
			        </v-card-title>
			        <v-divider></v-divider>
			        <v-card-text >
			        	<form @submit.prevent = "onCreatJourney">
			        		<div v-if = "!showSteper">
			        			<v-layout row wrap>
				        			<v-flex xs12 sm6 offset-sm3>
				        				<v-text-field
								            label="Journey Name"
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
								            label="Where is your state of your journey"
								            name = "name"
								            id = "wilaya"
								            required
								            v-model = "wilaya"
								        ></v-text-field>
				        			</v-flex>
				        		</v-layout>
				        		<v-layout row wrap>
				        			<v-flex xs12 sm6 offset-sm3>
				        				<v-subheader class="pl-0">Select the duration of your journey (days)
				        				</v-subheader>
				        				<v-slider
								          	v-model="duration"
								          	max ="7"
								          	thumb-label
								          	name = "duration"
								          	id = "duration"
								        ></v-slider>
				        			</v-flex>
				        		</v-layout>
				        		<v-layout row wrap>
				        			<v-flex xs12 sm6 offset-sm3>
				        				<v-btn color = "primary" @click = "onPickFile">Upload Image</v-btn>
				        				<input 
					        				type="file" 
					        				name="imageUrl" 
					        				style="display: none;" 
					        				ref="fileInput" 
					        				accept="image/*"
					        				@change = "onFilePicked">
				        			</v-flex>
				        		</v-layout>
				        		<v-layout row wrap>
				        			<v-flex xs12 sm6 offset-sm3>
				        				<v-img 
				        					:src = "imageUrl"
									        contain>	
				        				</v-img>
				        			</v-flex>
				        		</v-layout>
				        		<v-layout row wrap>
				        			<v-flex xs12 sm6 offset-sm3>
				        				<v-textarea
								            label="Add a general description of your journey"
								            name = "details"
								            id = "details"
								            required
								            v-model = "details"
								        ></v-textarea>
				        			</v-flex>
				        		</v-layout>
				        		<v-layout row wrap>
				        			<v-flex xs12 sm6 offset-sm3>
				        				<v-text-field
				        					v-model = "nbsteps"
								            label="How many steps are in jour journey"
								            name = "nbsteps"
								            id = "nbsteps"
								            type = "number"
								            required
								            @input = "onInput"
								        ></v-text-field>
				        			</v-flex>
				        		</v-layout>
				        		<v-layout row wrap>
				        			<v-flex xs12 sm6 offset-sm3>
				        				<v-btn color = "primary" @click = "goNext" :disabled = "!formIsValid">Next</v-btn>
				        			</v-flex>
				        		</v-layout>
			        		</div>
			        		<v-stepper v-model="e1" light v-if="showSteper && !endFill">
			    				<v-stepper-header>
			    					<template v-for="n in nbsteps">
							          <v-stepper-step
							            :complete="e1 > n"
							            :key="`${n}-step`"
							            :step="n"
							            editable
							          >
							            Step {{ n }}
							          </v-stepper-step>

							          <v-divider
							            v-if="n !== nbsteps"
							            :key="n"
							          ></v-divider>
							        </template>
			    				</v-stepper-header>
			    				<v-stepper-items>
							        <v-stepper-content
							          v-for="n in nbsteps"
							          :key="`${n}-content`"
							          :step="n"
							    >
							       	<v-card
							            class="mb-5"
							        >
							        	<v-layout row wrap>
						        			<v-flex xs12 sm6 offset-sm3>
						        				<v-text-field
						        					v-model = "stepName"
										            label="Add the name of this step"
										            name = "stepName"
										            id = "stepName"
										            required
										        ></v-text-field>
						        			</v-flex>
						        		</v-layout>
							        	<v-layout row wrap>
						        			<v-flex xs12 sm6 offset-sm3>
						        				<v-text-field
						        					v-model = "imageStep"
										            label="Add the URL of your image step"
										            name = "imageStep"
										            id = "imageStep"
										            required
										        ></v-text-field>
						        			</v-flex>
						        		</v-layout>
						        		<v-layout row wrap>
						        			<v-flex xs12 sm6 offset-sm3>
						        				<v-img 
						        					:src = "imageStep"
											        contain>	
						        				</v-img>
						        			</v-flex>
						        		</v-layout>
						        		<v-layout row wrap>
						        			<v-flex xs12 sm6 offset-sm3>
						        				<v-textarea
										            label="Add a description of this step"
										            name = "description"
										            id = "description"
										            required
										            v-model = "description"
										        ></v-textarea>
						        			</v-flex>
					        			</v-layout>
							        </v-card>
							        	<v-btn
							            	color="primary"
							            	@click="nextStep(n)"
							            	:disabled = "!disabled"
							        	>
							            	Continue
							        	</v-btn>
							        	<v-btn flat @click = "onCancel">Cancel</v-btn>
							        </v-stepper-content>
							    </v-stepper-items>
			  				</v-stepper>
			  				<v-layout row wrap v-if = "endFill">
					        	<v-flex xs12 sm6 offset-sm3>
					        		<v-btn color = "primary" type = "submit" :disabled = "!formIsValid || loading" :loading = "loading" block>	Creat the Journey
				        				<span slot="loader" class="custom-loader">
										    <v-icon light v-if = "!formIsValid">cached</v-icon>
										</span>
				        			</v-btn>
				        			<v-btn flat color = "primary" @click="cancel" :disabled = "!formIsValid || loading" :loading = "loading" block>	Cancel
				        				<span slot="loader" class="custom-loader">
										    <v-icon light v-if = "!formIsValid">cached</v-icon>
										</span>
				        			</v-btn>
					        	</v-flex>
					        </v-layout>
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
      	endFill : false,
        wilaya: '',
        duration : 0,
        imageUrl : '',
        imageJourney : null,
        name : '',
        details : '',
        nbsteps : 0,
        showSteper : false,
        e1 : 0,
        steps : [],
        imageStep : '',
        stepName : '',
        description : '',
      }
    },
    methods : {
    	goNext(){
    		this.showSteper = true
    	} ,     
    	onInput (val) {
	        this.nbsteps = parseInt(val)
	    },
	    onCancel(){
	    	this.e1 --
	    	if (this.e1 == 0) {
	    		this.showSteper = false
	    	}
	    },
	    nextStep (n) {
	        if (n === this.nbsteps) {
	          this.endFill = true
	        } else {
	          this.e1 = n + 1
	        }
	        let step = {
	        	step : n,
	        	name : this.stepName,
	        	history : this.description,
	        	imageStep : this.imageStep,
	        }
	        this.steps.push(step)
	        this.stepName = ''
	        this.description = ''
	        this.imageStep = ''
	    },
	    onCreatJourney(){
	    	const journey = {
	    		name : this.name,
	    		duration : this.duration,
	    		wilaya : this.wilaya,
	    		imageJourney : this.imageJourney,
	    		details : this.details,
	    		steps : this.steps
	    	}
	    	this.$store.dispatch('createJourney',journey)
	    	this.$router.push('/journeys/journeys')
	    },
	    onPickFile(){
	    	this.$refs.fileInput.click()
	    },
	    onFilePicked(event){
	    	const files = event.target.files
	    	if(files.length === 0){
	    		alert('you should pick an image file !!!')
	    	}else{
	    		let file = files[0]
	    		if(this.validFileType(file)){
	    			const fileReader = new FileReader()
	    			fileReader.addEventListener('load',()=>{
	    				this.imageUrl = fileReader.result
	    			})
	    			fileReader.readAsDataURL(file)
	    			this.imageJourney = file
	    		}
	    	}
	    },
	    cancel(){
	    	this.showSteper = false
	    	this.endFill = false
	    },
	    validFileType(file) {
	    	var fileTypes = [
			  'image/jpeg',
			  'image/pjpeg',
			  'image/png',
			  'image/jpg'
			]
		  	for(var i = 0; i < fileTypes.length; i++) {
		     	if(file.type === fileTypes[i]) {
		     		return true;
		    	}
		  	}
		  	return false;
		}
    },
    watch: {
      steps (val) {
        if (this.e1 > val) {
          this.e1 = val
        }
      }
    },
    computed : {
    	formIsValid(){
    		return (this.name != '' && this.details != '' && this.duration != 0 && this.wilaya != '' && this.imageJourney != null && this.nbsteps > 0)
    	},
    	disabled () {
    		return (this.imageStep != '' && this.description != '' && this.stepName != '')
    	},
    	loading(){
			return this.$store.getters.loading
		}
    }
  }
</script>