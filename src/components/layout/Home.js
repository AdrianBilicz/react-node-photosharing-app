import React, {Component} from 'react'
import {Posts, Account} from '../containers'
import {Sidebar} from '../view'



class Home extends Component{

	render(){

		return (
			<div>
				<Sidebar/>
				<div id="main">
					<div className="container">
						<div className="row">
							<div className="col-lg-12"><Posts/></div>
						</div>
					</div>
					<Account/>


				</div>
			</div>

			)
	}
}
export default Home