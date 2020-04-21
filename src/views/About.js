import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel, Row, Col, Container  } from "react-bootstrap";
import "./About.css";
  
export default function About() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function validateForm() {
		return email.length > 0 && password.length > 0;
		}
	function handleSubmit(event) {
		event.preventDefault();
		}
	return (
		<Container>
			<Row>
				<Col>
					<form onSubmit={handleSubmit}>
						<FormGroup controlId="email" size="xxl">    {/*form eMail*/}
							<FormLabel >Email</FormLabel >
							<FormControl
								autoFocus
								type="email"
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</FormGroup>
						<div className="num-pad">
							<div className="span4">
								<div className="num">
									<div className="txt">1</div>
								</div>
							</div>
							<div className="span4">
								<div className="num">
									<div className="txt">2</div>
								</div>
							</div>
							<div className="span4">
								<div className="num">
									<div className="txt">3</div>
								</div>
							</div>
							<div className="span4">
								<div className="num">
									<div className="txt">4</div>
								</div>
							</div>
							<div className="span4">
								<div className="num">
									<div className="txt">5</div>
								</div>
							</div>
							<div className="span4">
								<div className="num">
									<div className="txt">6</div>
								</div>
							</div>
							<div className="span4">
								<div className="num">
									<div className="txt">7</div>
								</div>
							</div>
							<div className="span4">
								<div className="num">
									<div className="txt">8</div>
								</div>
							</div>
							<div className="span4">
								<div className="num">
									<div className="txt">9</div>
								</div>
							</div>
							<div className="span4">
								<div className="num">
									<div className="txt">0</div>
								</div>
							</div>
							<div className="span4">
								<div className="num">
									<div className="txt">Del</div>
								</div>
							</div>
						</div>
						<Button block size="xxl" disabled={!validateForm()} type="submit">Enter</Button>
					</form>      
				</Col>
			</Row>
		</Container>
		);
	}