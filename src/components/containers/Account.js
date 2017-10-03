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
	render(){
		const currentUser = this.props.account ? this.props.account.username : null
		console.log(currentUser)
		return(
			<div>
				{ (currentUser) ? <h2>{currentUser}</h2> : <Register onRegister={this.register.bind(this)} onLogin={this.login.bind(this)}/> }
				
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
		checkCurrentUser: () => dispatch(action.checkCurrentUser())
	}
}

export default connect(stateToProps,dispatchToProps)(Account) 