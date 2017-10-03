import React, {Component} from 'react'


class Register extends Component {
  constructor(){
    super()
    this.state ={
      registration:{
        username:'',
        password: ''
      }
    }
  }
  updateUser(e){
    
    let updated = Object.assign({},this.state.registration)
    updated[e.target.id] = e.target.value
    this.setState({
      registration: updated
    })
  }
  submitRegistration(e){
    e.preventDefault()
    if(this.state.registration.username.length == 0){
      alert('Please add your username')
      return
    }
    if(this.state.registration.password.length == 0){
      alert('Please add your password')
      return
    }
    this.props.onRegister(this.state.registration)
  }
  submitLoginCredentials(e){
    e.preventDefault()
    if(this.state.registration.username.length == 0){
      alert('Please add your username')
      return
    }
    if(this.state.registration.password.length == 0){
      alert('Please add your password')
      return
    }
    this.props.onLogin(this.state.registration)
  }
  render(){
    return(
     <div>
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input onChange={this.updateUser.bind(this)} type="text" className="form-control" id="username" aria-describedby="username" placeholder="username"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input onChange={this.updateUser.bind(this)} type="password" className="form-control" id="password" placeholder="Password"/>
        </div>
        <button onClick={this.submitRegistration.bind(this)} className="btn btn-primary">Join!</button>
        <button onClick={this.submitLoginCredentials.bind(this)} className="btn btn-info">Sign In!</button>
      </form>
     </div>
     )
  }
}

export default Register 