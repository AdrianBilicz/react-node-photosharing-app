import React, {Component} from 'react'
import {APIManager} from '../../utils'
import {connect} from 'react-redux'
import actions from '../../actions'
import {CreatePost} from '../view'


class Posts extends Component{


	componentDidMount(){
		const currentLocation = this.props.posts.currentLocation
		this.props.fetchPosts(currentLocation)
	}
	componentDidUpdate(){
		if(this.props.posts.list == null){
			const currentLocation = this.props.posts.currentLocation
			this.props.fetchPosts(currentLocation)
		}

	}
	submitPost(post){
		const user = this.props.account.user
		if(user == null){
			alert('Please sign up or login to submit.')
			return
		}
		post['profile'] = {
			id: user.id,
			username: user.username
		}
		const currentLocation = this.props.posts.currentLocation
		post['geo'] = [
		currentLocation.lat,
		currentLocation.lng
		]
		this.props.createPost(post)
	}
	render(){
		const list = this.props.posts.list

		return(
			<div >
			<CreatePost onCreate={this.submitPost.bind(this)}/>
			<hr/>
			<div className="photo-list">
				<div className="row">
					{(list == null) ? null : list.map((post,i) => {
						return (
							<div key={post.id} className="col-md-4">
								<div  className="card card-custom">
								<img className="card-img-top" src={post.image}alt="Card image cap"/>
								<div className="card-body">
								<h4 className="card-title">{post.caption}</h4>
								</div>
								<div className="footer">
								<small>{post.profile.username}</small>
								</div>
								</div>

							</div>
							)
						}) 
					}
				</div>

			</div>
				</div>
			)
	}
}

const stateToProps = (state) => {
	return{
		posts: state.posts,
		account: state.account
	}
}
const dispatchToProps = (dispatch) => {
	return {
		fetchPosts: (params) => dispatch(actions.fetchPosts(params)),
		createPost: (params) => dispatch(actions.createPost(params))
	}
}

export default connect(stateToProps,dispatchToProps)(Posts)

