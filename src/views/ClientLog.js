import React from "react";
import { Button, FormGroup, FormControl, FormLabel, Row, Col, Container  } from "react-bootstrap";

export default class ClientLog extends React.Component {
    state = {
        input: "",
		numPad: [1,2,3,4,5,6,7,8,9,0],
		datetime: ""
		};
	adjDatetime(){
		return this.state.datetime = this.state.datetime.getDate() + "/"
                + this.state.datetime.getMonth()  + "/" 
                + (this.state.datetime.getFullYear()+543) + " "  
                + this.state.datetime.getHours() + ":"  
                + this.state.datetime.getMinutes() + ":" 
                + this.state.datetime.getSeconds();
		}	
	handleIncrement(event, x){
		this.setState({input : this.state.input += x})
		}
	handleDecrement = event => {
		this.setState({input : this.state.input.slice(0, -1)})
		}
    render() {
        return (
            <Container>       
			<Row>
				<Col>
					<form>
{/*InputBox*/}						
						<FormGroup controlId="clientID" size="xxl">    {/*form eMail*/}
							<FormLabel >Email</FormLabel >
							<FormControl
								autoFocus
								type="email"
								value={this.state.input}							 
								/>
						</FormGroup>
{/*numPad*/}						
						<div className="numPadPanel">
							{this.state.numPad.map(
								(numPad) => {
									return <Button
										variant="secondary"
										className={`numPad${numPad}`}
										onClick={(e) => {
											this.handleIncrement(e, numPad)
									   		}}
										>
										{numPad}</Button>;
									}									
								)}
{/*Del Button*/}								
							<Button
								variant="danger"
								className={`numPad${"Del"}`}
								onClick={this.handleDecrement}
								>
								Del
							</Button>
{/*Enter Button*/}								
							<Button
								variant="warning"
								className={`numPad${"Enter"}`}
								onClick={
									function(){
										//console.log("This Time is "+this.state.datetime);
										window.close();
										}}
								>
								Enter
							</Button>														
						</div>
					</form>      
				</Col>
			</Row>
		</Container>
            );
        }
    }