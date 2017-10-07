import constants from '../constants'

var initialState = {
	user: null
}

export default (state = initialState, action) => {
	let updated = Object.assign({},state)
	switch (action.type) {
		case constants.CURRENT_USER_RECIEVED:
			updated['user'] = action.user
			console.log(updated)
			return updated
		case constants.USER_LOGOUT:
			updated['user'] = null
			return updated

		default:
			return updated
			
	}
}