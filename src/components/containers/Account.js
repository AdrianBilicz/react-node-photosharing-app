import React, {Component} from 'react'
import {Register} from '../view'
import {connect} from 'react-redux'
import action from '../../actions'


class Account extends Component {
	componentDidMount(){
		this.props.checkCurrentUser()
	}
	register(registration){
		this.props.createUser(registration)
	}
	login(credentials){
		this.props.login(credentials)
	}
	signOut(){
		this.props.signOut()
	}
	render(){
		const currentUser = this.props.account ? this.props.account.username : null
		console.log(currentUser)
		return(
			<div>
				<Register currentUser={currentUser} signOut={this.signOut.bind(this)} onRegister={this.register.bind(this)} onLogin={this.login.bind(this)}/>
			</div>
			)
	}
}
const stateToProps = (state) => {
	return {
		account: state.account.user
	}
}
const dispatchToProps = (dispatch) => {
	return {
		createUser: (registration) => dispatch(action.createUser(registration)),
		login: (registration) => dispatch(action.login(registration)),
		checkCurrentUser: () => dispatch(action.checkCurrentUser()),
		signOut: () => dispatch(action.signOut())
	}
}

export default connect(stateToProps,dispatchToProps)(Account) 