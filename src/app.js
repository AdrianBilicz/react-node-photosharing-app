import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Home} from './components/layout'
import store from './stores'
import {Provider} from 'react-redux'




class App extends Component{
	render(){
		return(
			<Provider store={store.configure()}>
				<Home/>
			</Provider>
			
			)
	}
}

ReactDOM.render(<App/>,document.getElementById('root'))