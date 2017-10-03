import React, {Component} from 'react'
import {withGoogleMap, GoogleMap} from 'react-google-maps'


class Map extends Component {
	constructor(){
		super()
		this.state = {
			map: null
		}
	}

	mapDragged(){
		var latLng = this.state.map.getCenter().toJSON()
		console.log('mapDragged '+JSON.stringify(latLng))
		this.props.mapMoved(latLng)
	}
	
	render(){
		const mapContainer = <div stye={{height:'100%', width: '100%'}}></div>

		return (
			<GoogleMap
			ref = {(map) => {
				if(this.state.map != null)
					return
				this.setState({map: map})
			}}
				onDragEnd={this.mapDragged.bind(this)}
				defaultZoom={this.props.zoom}
				defaultCenter={this.props.center}
				options={{streetViewControl: false, mapTypeControl: false}}>
			</GoogleMap>

			)
	}
}

export default withGoogleMap(Map)