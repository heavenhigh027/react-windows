import React from "react";
import {
	BrowserRouter as Router,
	Switch,
    Route,
    Link
    } from "react-router-dom";
import {Button} from 'react-bootstrap';    

export default function About() {   
    return (
        <div>
            <Button onClick={window.close()}>About</Button> 
        </div>
        );
    };
    