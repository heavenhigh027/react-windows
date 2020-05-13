import React from 'react';
import Tabletop from 'tabletop';
import useGoogleSpreadsheet from 'use-google-spreadsheet';
import {Container,
		Table
		} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css2.css';
import './assets/dataTables.bootstrap4.min.css';
//import './assets/dataTables.bootstrap4.min.js';
import $ from 'jquery';
//font awesome auto import
class SheetCMS extends React.Component {
	constructor() {
		super()
		this.state = {
			myData: []
			}
		}
	/*add the Tabletop init function to a componentDidMount() call. */
	componentDidMount() {
		Tabletop.init({
			key: '1Nw3UOKfCNLBk8hdu5tnmEyw_mDJWzhTF7qZcx_SYkrE',	//using the key with your Google Sheet key
			callback: googleData => {		//Right now, we are simply logging the data to the console in the callback function.
				this.setState({
					myData: googleData
					})
				},
			simpleSheet: true
			})
		}

	render() {
		// console.log('updated state --->', this.state)
		 //const { myData } = this.state
		return (
			<Container>
				<header className="App-header">
					<h1 className="App-title">React + Google Sheets Demo</h1>
				</header>
				<Table striped bordered hover responsive>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Tel</th>
							<th>D</th>
							<th>E</th>
							<th>F</th>
							<th>G</th>
						</tr>
					</thead>
						<tbody>
						{
/*
we can write up some simple JSX to display using a map function 
to loop over the array and display each employee.
*/					
this.state.myData.map(obj => {
							return (		

								<tr key={obj.ID}>
									<td>{obj.ID}</td>
									<td>{obj.Name}</td>
									<td>{obj.Tel}</td>
									<td>{obj.D}</td>
									<td>{obj.E}</td>
									<td>{obj.F}</td>
									<td>{obj.G}</td>
								</tr>							
								)
							})
						}
						</tbody>
				</Table>
			</Container>
			);
		}
	}
export default SheetCMS;