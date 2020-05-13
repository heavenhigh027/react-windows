import React from "react";
import Tabletop from 'tabletop';
import { Button, InputGroup, FormControl, Container, Table  } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
export default class ClientLog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'name',
            email: 'email',
            sumVal: 'Total Value',
            isGranted: '',
            ggData: []
        };
    }
    componentDidMount() {
		Tabletop.init({
			key: '1kbG2cEVMD3N_khesz03bC5WwOW-cxQdzAWGIs3Nh4GU',	//using the key with your Google Sheet key
			callback: googleData => {		//Right now, we are simply logging the data to the console in the callback function.
				this.setState({
					ggData: googleData
					})
				},
			simpleSheet: true
			})
		}
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            })
        }
    onSubmit = (e) => {
        e.preventDefault();
        const form = {
        name: this.state.name,
        email: this.state.email
        
        }
            {/* -----------you would send data to API to get results, I used database for ease, this also clears the form on submit----------------*/}
        
        //database.push(form);
        this.setState({
            sumVal: this.state.email,
            name: '',
            email: ''
           })
          
        }
    /*
    1.show on search
    3.granted within 3 years
    */     
    render() {
        return (
            <Container>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="รหัสสมาชิก"
                        aria-label="รหัสสมาชิก"
                        aria-describedby="basic-addon1"
                        name='name'
                        value={this.state.name}
                        />
                        <InputGroup.Append></InputGroup.Append>
                    <FormControl
                        placeholder="ชื่อสมาชิก"
                        aria-label="ชื่อสมาชิก"
                        aria-describedby="basic-addon2"
                        name='email'
                        value={this.state.email}
                        onChange={e => this.handleChange(e)}
                        />
                        <InputGroup.Append>                    
                    <Button 
                        variant="secondary"
                        onClick={(e) => this.onSubmit(e)}
                        >ค้นหา</Button>
                        </InputGroup.Append>
                </InputGroup>
            <h1>{this.state.name}</h1>
            <h2>{this.state.email}</h2>
            <h3>{this.state.sumVal}</h3>
            <Table striped bordered hover responsive>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Date</th>
						</tr>
					</thead>
						<tbody>
						{				                            	
this.state.ggData.map(obj => {
                            if(this.state.sumVal==obj.ID)
                                {
                                return (		
                                    <tr key={obj.ID}>
                                        <td>{obj.ID}</td>
                                        <td>{obj.Name}</td>
                                        <td>{this.state.isGranted = obj.Date}</td>
                                    </tr>
                                
                                )
                                }
							})
						}
						</tbody>
				</Table>
            {/*granted*/ }            
            </Container>
            );
        }
    }