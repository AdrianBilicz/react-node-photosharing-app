import constants from '../constants'
import {APIManager} from '../utils'


export default {
	fetchPosts: (params) => {
		return (dispatch) => {
			APIManager
			.get('/api/post',params)
			.then( response => {
				dispatch({
					type: constants.POST_RECIEVED,
					posts: response.results
				})
			})
			.catch( err => {
				console.log('ERROR ' + err)
			})

		}
	},
	createPost(params){
		return (dispatch) => {
			APIManager
			.post('/api/post',params)
			.then( response => {
				console.log('POST_CREATED ' + JSON.stringify(response))
				dispatch({
					type: constants.POST_CREATED,
					post: response.result
				})
			})
			.catch( err => {
				console.log('ERROR ' + err)
			})

		}
	},
	createUser(params){
		return (dispatch) => {
			APIManager
			.post('/account/register',params)
			.then( response => {
				console.log('CURRENT_USER_RECIEVED ' + JSON.stringify(response))
				dispatch({
					type: constants.CURRENT_USER_RECIEVED,
					user: response.user
				})
			})
			.catch( err => {
				console.log('ERROR ' + err)
			})

		}
	},
	login(params){
		return (dispatch) => {
			APIManager
			.post('/account/login',params)
			.then( response => {
				console.log('CURRENT_USER_RECIEVED ' + JSON.stringify(response))
				dispatch({
					type: constants.CURRENT_USER_RECIEVED,
					user: response.user
				})
			})
			.catch( err => {
				console.log('ERROR ' + err)
				alert(err.message)
			})

		}
	},
	checkCurrentUser(params){
		return (dispatch) => {
			APIManager
			.get('/account/currentuser',null)
			.then( response => {
				console.log('CURRENT_USER_RECIEVED ' + JSON.stringify(response))
				dispatch({
					type: constants.CURRENT_USER_RECIEVED,
					user: response.user
				})
			})
			.catch( err => {
				console.log('ERROR ' + err)

			})

		}
	},
	postsRecieved: (posts) => {
		return {
			type: constants.POST_RECIEVED,
			posts: posts
		}
	},
	updateCurrentLocation: (location) => {
		return{
			type: constants.CURRENT_LOCATION_CHANGED,
			location: location
		}
	}
}