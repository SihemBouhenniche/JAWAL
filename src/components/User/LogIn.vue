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
			            <h3 class="headline mb-0">Log In</h3>
			          </div>
			        </v-card-title>
			        <v-divider></v-divider>
			        <v-card-text >
			        	<form @submit.prevent = "onLogIn">
			        		<div>
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
				        				<v-btn color = "primary" type = "submit" :disabled = "!formIsValid || loading" :loading = "loading"">	Log In
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
			}
		},
		methods : {
			onLogIn(){
				const user = {
					email : this.email,
					password : this.password,
				}
				this.$store.dispatch('logUserIn',user)
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