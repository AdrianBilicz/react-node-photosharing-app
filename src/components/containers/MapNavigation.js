import React, {Component} from 'react'
import {Map} from '../view'
import {connect} from 'react-redux'
import actions from '../../actions'


class MapNavigation extends Component {

	setNewLocation(location){
		// console.log('setNewLocation: '+ JSON.stringify(location))
		this.props.updateCurrentLocation(location)
	}
	render(){
		
		return (
			<div>
				<Map 
					containerElement={<div style={{position: 'absolute', minHeight: '100%',height:'100%', width: '100%'}}></div>} 
					mapElement={<div style={{height:'100%', width: '100%'}}></div>} 
					center={this.props.posts.currentLocation}
					zoom={14}
					mapMoved={this.setNewLocation.bind(this)}
				/>
			</div>

			)
	}
}

const stateToProps = (state) => {
	return {
		posts: state.posts
	}
}

const dispatchToprops = (dispatch) => {
	return {
		updateCurrentLocation: (location) => dispatch(actions.updateCurrentLocation(location))
	}
}

export default connect(stateToProps,dispatchToprops)(MapNavigation)