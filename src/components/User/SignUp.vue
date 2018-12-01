<template>
	<v-container>
		<v-layout row>
			<v-flex xs12>
				<v-layout row v-if = "error">
					<v-flex xs12>
						<app-alert @dismissed = "onDismissed" :text = "error.message"></app-alert>
					</v-flex>
				</v-layout>
				<v-card light>
			        <v-card-title class = "blue white--text">
			          <div>
			            <h3 class="headline mb-0">Sign Up</h3>
			            <div>Fill out the following form to signup</div>
			          </div>
			        </v-card-title>
			        <v-divider></v-divider>
			        <v-card-text >
			        	<form @submit.prevent = "onSignUp">
			        		<div>
			        			<v-layout row wrap>
				        			<v-flex xs12 sm6 offset-sm3>
				        				<v-text-field
								            label="Your Full Name"
								            name = "name"
								            id = "name"
								            required
								            v-model = "name"
								            type = "text"
								        ></v-text-field>
				        			</v-flex>
				        		</v-layout>
			        			<v-layout row wrap>
				        			<v-flex xs12 sm6 offset-sm3>
				        				<v-text-field
								            label="Your Email"
								            name = "email"
								            id = "email"
								            required
								            v-model = "email"
								            type = "email"
								        ></v-text-field>
				        			</v-flex>
				        		</v-layout>
				        		<v-layout row wrap>
				        			<v-flex xs12 sm6 offset-sm3>
				        				<v-text-field
								            label="Your Password"
								            name = "password"
								            id = "password"
								            required
								            v-model = "password"
								            type = "password"
								        ></v-text-field>
				        			</v-flex>
				        		</v-layout>
				        		<v-layout row wrap>
				        			<v-flex xs12 sm6 offset-sm3>
				        				<v-text-field
								            label="Confirm your Password"
								            name = "confirmPassword"
								            id = "confirmPassword"
								            required
								            v-model = "confirmPassword"
								            type = "password"
								            :rules = "[comparePasswords]"
								        ></v-text-field>
				        			</v-flex>
				        		</v-layout>
				        		<v-layout row wrap>
				        			<v-flex xs12 sm6 offset-sm3>
				        				<v-combobox
								          	v-model="membership"
								          	:items="memberships"
								          	label="Select how do you want to use JAWAL "
								          	required
								          	id = "membership"
								          	name = "membership"
								        ></v-combobox>
				        			</v-flex>
				        		</v-layout>
				        		<v-layout row wrap>
				        			<v-flex xs12 sm6 offset-sm3>
				        				<v-text-field
				        					v-model = "profilePhoto"
								            label="Photo URL of your profile"
								            name = "profilePhoto"
								            id = "profilePhoto"
								            required
								        ></v-text-field>
				        			</v-flex>
				        		</v-layout>
				        		<v-layout row wrap>
				        			<v-flex xs12 sm6 offset-sm3>
				        				<v-img 
				        					:src = "profilePhoto"
									        contain>	
				        				</v-img>
				        			</v-flex>
				        		</v-layout>
				        		<v-layout row wrap>
				        			<v-flex xs12 sm6 offset-sm3>
				        				<v-btn color = "primary" type = "submit" :disabled = "!formIsValid || loading" :loading = "loading">	Sign Up
				        					<span slot="loader" class="custom-loader">
										        <v-icon light>cached</v-icon>
										    </span>
				        				</v-btn>
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
				email : '',
				password : '',
				confirmPassword : '',
				membership : '',
				memberships : ['Individual (free)', 'Entreprise (paid)'],
				profilePhoto : '',
				name : ''
			}
		},
		methods : {
			onSignUp(){
				const user = {
					email : this.email,
					password : this.password,
					membership : this.membership,
					profilePhoto : this.profilePhoto,
					name : this.name
				}
				this.$store.dispatch('signUserUp',user)
				this.$router.push('/')
			},
			onDismissed(){
				console.log('dismissed alert')
				this.$store.dispatch('clearError')
			}
		},
		computed : {
			formIsValid(){
				return (this.email!= '' && this.password != '' && this.membership != '' && this.name != '')
			},
			comparePasswords(){
				return (this.password != this.confirmPassword ? 'Passwords do not match' : '')
			},
			user(){
				return this.$store.getters.user
			},
			error (){
				return this.$store.getters.error
			},
			loading(){
				return this.$store.getters.loading
			}
		}
	}
</script>