import React, { Component } from 'react';
import Tabletop from 'tabletop';

class SheetCMS extends Component {
	constructor() {
		super()
		this.state = {
			data: []
			}
		}
	/*add the Tabletop init function to a componentDidMount() call. */
	componentDidMount() {
		Tabletop.init({
			key: '1Nw3UOKfCNLBk8hdu5tnmEyw_mDJWzhTF7qZcx_SYkrE',	//using the key with your Google Sheet key
			callback: googleData => {		//Right now, we are simply logging the data to the console in the callback function.
				this.setState({
					data: googleData
					})
				},
			simpleSheet: true
			})
		}

	render() {
		// console.log('updated state --->', this.state)
		 const { data } = this.state
		return (
			<div className="SheetCMS">
				<header className="App-header">
					<h1 className="App-title">React + Google Sheets Demo</h1>
				</header>
				<div id="employee-details">
					{
					/*we can write up some simple JSX to display using a map function to loop over the array and display each employee.*/
					data.map(obj => {
						return (
							<div key={obj.ID}>
								<p>{obj.ID}</p>
								<p>{obj.Name}</p>
								<p>{obj.Tel}</p>
								{/*<img alt={obj.favDog} src={obj.img} />*/}
							</div>
							)
						})
					}
				</div>
			</div>
			);
		}
	}
export default SheetCMS;