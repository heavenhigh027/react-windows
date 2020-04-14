import React from 'react';
import ReactDOM from 'react-dom';
/*
	1.	import React from 'react' and declare class App extends React.Component
	2.	import {Component} from 'react' and declare class App extends Component
*/
class Contact extends React.Component {
	state = {
		inputText: '',
		mouseX: 0,
		mouseY: 0    
		}
	handleInput = (e) => {
		this.setState({inputText: e.target.value});
		}
	handleSubmit = () => {
		alert(`Quoteth Shakespeare, "You cad! ${this.state.inputText}"`);
		}
	handleMouse = (e) => {
		this.setState({ mouseX: e.screenX, mouseY: e.screenY });
		}
	handleClick(e) {
		e.preventDefault();
		console.log('The link was clicked.');
		}	
	render() {
		return (
			<div>	
				<input
					onChange={this.handleInput}  
					value={this.state.inputText}
				/>										{/* ⌨ input text */}		
				<form onSubmit={this.handleSubmit}>  	{/* 📥 onsubmit */}
					<input value={this.state.inputText}/>
					<button type="submit">submit dis</button>
				</form>		
				<div>
					<img
						src="doggo.jpeg"
						onMouseMove={this.handleMouse} 
					/>									{/* 🖱️ mouse movement */}
					{this.state.mouseX}px / {this.state.mouseY}px
				</div>
				<div>				
					<a href="#" onClick={this.handleClick}>
					Click me
					</a>
				</div>		
			</div>
			)
		}
	}
export default Contact;