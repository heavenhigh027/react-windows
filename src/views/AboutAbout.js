import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class AboutAbout extends React.Component {
	render() {
		return (
			<div>
                <Button onClick={window.close()}>AboutAbout</Button> 
			</div>
			)
		}
	}
export default AboutAbout;