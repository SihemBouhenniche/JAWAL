
import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
Vue.use(Vuex)


export const store  = new Vuex.Store({
	state : {
		loadedJourneys : [],
		user : null,
		loading : false,
		error : null,
		displayedJourneys : [],
	},
	mutations : {
		createJourney(state, payload){
			console.log('createJourney')
			const journey = {
				id: payload.id,
				name : payload.name,
				details : payload.details,
				wilaya : payload.wilaya,
				duration : payload.duration,
				dateOfCreation : payload.dateOfCreation,
				creatorId : payload.creatorId,
				imageUrl : payload.imageUrl,
				steps : payload.stepsJourney
			} 
			state.loadedJourneys.push(journey)
			state.displayedJourneys.push(journey)
		},
		setUser(state,payload){
			state.user = payload
		},
		setLoading(state,payload){
			state.loading = payload
		},
		setError(state,payload){
			state.error = payload
		},
		clearError(state){
			state.error = null
		},
		setLoadedJourneys(state,payload){
			state.loadedJourneys = payload
		},
		setDisplayedJourenys(state,payload){
			state.displayedJourneys = payload
		},
		
	},
	actions : {
		loadJourneys({commit}){
			commit('setLoading',true)
			firebase.database().ref('journeys').once('value')
			.then(
				(data) =>{

					const journeysTab = []
					const obj = data.val()
					for(let keyJourney in obj){
						var steps = []
						for (let key in obj[keyJourney].steps) {
							steps.push({
								step : obj[keyJourney].steps[key].step,
						        name : obj[keyJourney].steps[key].name,
						        history : obj[keyJourney].steps[key].history,
						        imageStep : obj[keyJourney].steps[key].imageStep,
							})
						}
						journeysTab.push({
							id : keyJourney,
							name : obj[keyJourney].name,
							details : obj[keyJourney].details,
							wilaya : obj[keyJourney].wilaya,
							imageUrl : obj[keyJourney].imageUrl,
							dateOfCreation : obj[keyJourney].dateOfCreation,
							creatorId : obj[keyJourney].creatorId,
							steps : steps,
							duration : obj[keyJourney].duration
						})
					}
					commit('setLoading',false)
					commit('setLoadedJourneys',journeysTab)
					commit('setDisplayedJourenys',journeysTab)
				}
			).catch(
				(error) =>{
					console.log(error)
					commit('setLoading',false)
					commit('setError',error)
				}
			)
		},
		createJourney({commit,getters},payload){
			commit('setLoading',true)
			let key
			const journey = {
				name : payload.name,
				details : payload.details,
				wilaya : payload.wilaya,
				duration : payload.duration,
				dateOfCreation : new Date(),
				creatorId : getters.user.id
			}
			let steps = payload.steps
			firebase.database().ref('/journeys').push(journey)
			.then(data=>{
				key = data.key
				let imageUrl
				firebase.storage().ref(key+'/imageJourney'+key).put(payload.imageJourney)
				.then(info=>{
					imageUrl = info.metadata.fullPath
					firebase.storage().ref().child(imageUrl).getDownloadURL()
					.then(url=>{
						imageUrl = url
						firebase.database().ref('/journeys/'+ key).update({imageUrl:imageUrl})
						.then(()=>{
							for (var i = 0; i < steps.length; i++) {
								console.log('createStep')
								const step = {
									name : steps[i].name,
									step : steps[i].step,
									history : steps[i].history,
									imageStep : steps[i].imageStep
								}
								firebase.database().ref('/journeys/'+key+'/steps').push(step)
								.then(data=>{
									console.log('createStep')
								})
								.catch(error=>{
									commit('setLoading',false)
									commit('setError',error)
									return 0 
								})
							}
							const payload = {
								id:key,
								name : journey.name,
								details : journey.details,
								wilaya : journey.wilaya,
								duration : journey.duration,
								dateOfCreation : journey.dateOfCreation,
								creatorId : journey.creatorId,
								imageUrl : imageUrl,
								steps : steps
							} 
							commit('createJourney', payload)
							commit('setLoading',false)
						})
						.catch(error=>{
							commit('setLoading',false)
							commit('setError',error)
							console.log(error)
							return 0
						})
					})
					.catch(error=>  {
						commit('setLoading',false)
						commit('setError',error)
						console.log(error)
						return 0
					})
				})
				.catch(error=>{
					commit('setLoading',false)
					commit('setError',error)
					console.log(error)
					return 0 
				})
			})
			.catch(error=>{
				commit('setLoading',false)
				commit('setError',error)
				console.log(error)
				return 0 
			})
		},
		signUserUp({commit},payload){
			commit('setLoading',true)
			commit('clearError')
			firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
			.then(
				user =>{
					const newUser = {
						id : user.user.uid,
						name : payload.name,
						email : payload.email,
						password : payload.password,
						membership : payload.membership,
						profilePhoto : payload.profilePhoto,
						registredJourneys : []
					}
					firebase.database().ref('/users/' + user.user.uid).push(newUser)
					.then((user)=>{
						console.log(user)
						commit('setLoading',false)
						commit('setUser', newUser)
					}).catch(error=>{
						commit('setLoading',false)
						commit('setError',error)
						console.log(error)
					})
				}
			)
			.catch(
				error =>{
					commit('setLoading',false)
					commit('setError',error)
					console.log(error)
				}
			)
		},
		logUserIn({commit},payload){
			commit('setLoading',true)
			commit('clearError')
			firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
			.then(
				user =>{
					const id = user.user.uid
					firebase.database().ref('users').child(id).once('value')
					.then((data) =>{
						commit('setLoading',false)
						const user = data.val()
						let email = ''
						let name = ''
						let profilePhoto = ''
						let membership = ''
						let password = ''
						let registredJourneys = []
						for(let key in user){
							email = user[key].email
							name = user[key].name
							membership = user[key].membership
							profilePhoto = user[key].profilePhoto
							password = user[key].password
							console.log(1)
							break
						}
						const newUser = {
							id : id,
							registredJourneys : registredJourneys,
							email : email,
							name : name,
							profilePhoto : profilePhoto,
							membership : membership,
							password : password
						}
						commit('setUser', newUser)
					}).catch((error) =>{
						commit('setLoading',false)
						commit('setError',error)
						console.log(error)
					})
				}
			)
			.catch(
				error =>{
					commit('setLoading',false)
					commit('setError',error)
					console.log(error)
				}
			)
		},
		autoLogIn({commit},payload){
			commit('setLoading',true)
			const id = payload.uid
			firebase.database().ref('users').child(id).once('value')
			.then((data) =>{
				commit('setLoading',false)
				const user = data.val()
				let email = ''
				let name = ''
				let profilePhoto = ''
				let membership = ''
				let password = ''
				let registredJourneys = []
				for(let key in user){
					email = user[key].email
					name = user[key].name
					membership = user[key].membership
					profilePhoto = user[key].profilePhoto
					password = user[key].password
					break
				}
				const newUser = {
					id : id,
					registredJourneys : registredJourneys,
					email : email,
					name : name,
					profilePhoto : profilePhoto,
					membership : membership,
					password : password
				}
				commit('setUser', newUser)
			}).catch((error) =>{
				commit('setLoading',false)
				commit('setError',error)
				console.log(error)
			})
		},
		logOut({commit}){
			firebase.auth().signOut()
			commit('setUser',null)
		},
		clearError({commit}){
			commit('clearError')
		},
		journeysByWilaya({commit,getters},payload){
			var tab = []
			for (var i = 0; i < getters.loadedJourneys.length; i++) {
				if(getters.loadedJourneys[i].wilaya.toLowerCase().indexOf(payload.toLowerCase())!= -1){
					tab.push(getters.loadedJourneys[i])
				}
			}
			console.log(tab)
			commit('setDisplayedJourenys',tab)
		},
		journeysByDuration({commit,getters},payload){
			var tab = []
			for (var i = 0; i < getters.loadedJourneys.length; i++) {
				if(getters.loadedJourneys[i].duration == payload){
					tab.push(getters.loadedJourneys[i])
				}
			}
			console.log(tab)
			commit('setDisplayedJourenys',tab)
		},
		journeysByName({commit,getters},payload){
			var tab = []
			for (var i = 0; i < getters.loadedJourneys.length; i++) {
				if(getters.loadedJourneys[i].name.toLowerCase().indexOf(payload.toLowerCase())!= -1){
					tab.push(getters.loadedJourneys[i])
				}
			}
			console.log(tab)
			commit('setDisplayedJourenys',tab)
		},
	},
	getters : {
		loadedJourneys (state){
			return state.loadedJourneys
		},
		displayedJourneys(state){
			return state.displayedJourneys
		},
		loadedJourney (state){
			return ((id)=>{
				return state.loadedJourneys.find((journey)=>{
					return journey.id == id
				})
			})
		},
		user(state) {
			return state.user
		},
		error (state) {
			return state.error
		},
		loading(state) {
			return state.loading
		}
	}
})