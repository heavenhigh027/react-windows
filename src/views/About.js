import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
function About() {
		return (
		<div>
			<h2>About</h2>
			<div>
			<Button variant="primary">Primary</Button>{' '}
			<Button variant="secondary">Secondary</Button>{' '}
			<Button variant="success">Success</Button>{' '}
			<Button variant="warning">Warning</Button>{' '}
			<Button variant="danger">Danger</Button> 
			<Button variant="info">Info</Button>{' '}
			<Button variant="light">Light</Button> 
			<Button variant="dark">Dark</Button>{' '}
			<Button variant="link">Link</Button>
			</div>
		</div>
		);
	}

export default About;