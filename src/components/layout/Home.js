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
							<div className="col-md-8 col-xs-12"><Posts/></div>
							<div className="col-md-4 col-xs-12"><Account/></div>
						</div>
					</div>

				</div>
			</div>

			)
	}
}
export default Home