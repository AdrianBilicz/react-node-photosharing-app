import React, {Component} from 'react'


class Register extends Component {
  constructor(){
    super()
    this.state ={
      registration:{
        username:'',
        password: ''
      },
    navIsActive: 'hidden'
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
  isActive(){
    let isActive = (this.state.navIsActive == 'active') ? 'hidden' : 'active'
    this.setState({
      navIsActive: isActive
    })
  }
  logOut(){
    this.props.signOut()
  }
  render(){
    return(
     <div className={"account " +this.state.navIsActive}>
     <div onClick={this.isActive.bind(this)} className="nav-toggle"><div className="hamburger"></div></div>
     <span>{this.props.currentUser}</span>
     {(!this.props.currentUser) ? 
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
          <div className="flex">
            <button onClick={this.submitRegistration.bind(this)} className="btn btn-primary">Join!</button>
            <button onClick={this.submitLoginCredentials.bind(this)} className="btn btn-info">Sign In!</button>
          </div>
        </form>
    </div>
        : <button onClick={this.logOut.bind(this)} className="btn btn-info">Logout!</button>
     }
     </div>
     )
  }
}

export default Register 