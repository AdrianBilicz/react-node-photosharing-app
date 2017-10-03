import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import {APIManager} from '../../utils'
import sha1 from 'sha1'

class CreatePost extends Component{
	constructor(){
		super()
		this.state = {
			post: 
			{
				image: '',
				caption: ''
			}
		}
	}
	updatePost(e){
		e.preventDefault()
		let updatedPost = Object.assign({},this.state.post)
		updatedPost[e.target.id] = e.target.value
		this.setState({
			post: updatedPost
		})
	}
	submitPost(e){
		e.preventDefault()
		if(this.state.post.image.length == 0){
			alert('Please add an image first')
			return
		}
		if(this.state.post.caption.length == 0){
			alert('Please add an caption first')
			return
		}
		let updatedPost = Object.assign({},this.state.post)
		this.props.onCreate(updatedPost)
	}
	imageSelected(files){
		console.log('uploadFile: ')
		const image = files[0]
		const cloudName = 'dr4dag57n'
		const url =' https://api.cloudinary.com/v1_1/cloudName/image/upload'

		const timestamp = Date.now()/1000
		const uploadPreset = 'zy8e1wkh'

		const paramStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'oivyQkqTHNnhnL9wMvqfSbDJcCs'
		const signature = sha1(paramStr)
		const params = {
			'api_key': '216392968514297',
			'timestamp': timestamp,
			'upload_preset': uploadPreset,
			'singnature': signature
		}
		APIManager.uploadFile(url,image,params)
		.then((uploaded) => {
			console.log('Uploaded ' + JSON.stringify(uploaded))
			let updated = Object.assign({}, this.state.post)
			updated['image'] = uploaded['secure_url']
			this.setState({
				post: updated
			})
		})
		.catch(err => {
			console.log('err' + err)
		})
	}
	render(){
		return (
			<div>
			<h2>Create Post</h2>
			<input ref="caption" className="form-control" id="caption" onChange={this.updatePost.bind(this)} type="text" placeholder="caption"/>

			<div className="btn-group mr-2" role="group" aria-label="Basic example">
				<button type="button" onClick={this.submitPost.bind(this)} className="btn btn-info">
					Submit
				</button>
			</div>
			<div className="btn-group mr-2" role="group" aria-label="Basic example">
				<button type="button" className="btn btn-info">
					<Dropzone onDrop={this.imageSelected.bind(this)} style = {{border: 'none'}}>
						Upload Image
					</Dropzone>
				</button>
			</div>
			</div>
			)
	}
}
export default CreatePost