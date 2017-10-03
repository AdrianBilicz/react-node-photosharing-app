import constants from '../constants'

var initialState = {
	currentLocation: {
			lat: 40.75,
			lng: -73.98
		},
	list: null
}

export default (state = initialState, action) => {
	let updated = Object.assign({},state)
	switch (action.type) {
		case constants.POST_RECIEVED:
		updated['list'] = action.posts
		return updated

		case constants.CURRENT_LOCATION_CHANGED:
		console.log('CURRENT_LOCATION_CHANGED ' + JSON.stringify(action.location))
		updated['currentLocation'] = action.location
		updated['list'] = null
		return updated

		case constants.POST_CREATED:
		if(updated.list == null){
			updated.list = []
		} 

		updated.list.unshift(action.post)
		console.log('POST_CREATED ' + JSON.stringify(updated))
		return updated

		default:
			return updated
			
	}
}