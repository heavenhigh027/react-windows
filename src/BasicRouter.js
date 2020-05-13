import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
	} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,
		NavDropdown,
		Navbar,
		Nav,
		FormControl,
		Form} from 'react-bootstrap';	
/*Pinned : insert additonal path(s) here*/
import Home from "./views/Home.js"	
import About from "./views/About.js"
import Dashboard from "./views/Dashboard.js"
import Contact from "./views/Contact.js"
import InstaSearch from "./views/InstaSearch.js"
import SheetCMS from "./views/SheetCMS.js"
import SheetAPIV4 from "./views/SheetAPIV4.js"
import PushPull from "./views/PushPull.js"
import SimpleSearch from "./views/SimpleSearch.js"
import Login from "./views/Login.js"
import ClientLog from "./views/ClientLog.js"
import Seminar from "./views/Seminar.js"
/*
This site has multiple pages, all of which are rendered dynamically in the browser (not server rendered).
Although the page does not ever refresh, notice how React Router keeps the URL up to date as you navigate
through the site. This preserves the browser history, making sure things like the back button and bookmarks
work properly.
*/

export default function BasicRouter() {
	useEffect(() => {/*
		const timer = setTimeout(() => {
			window.open(
				'www.google.com',
				'com_MyDomain_myWindowForThisPurpose',
				'height=960px,width=940px'
				);
		}, 3000);
		return () => clearTimeout(timer);
	*/}, []);
	return (
		<Router>						
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="/Home">React-Windows</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/About">About</Nav.Link>
						<Nav.Link href="/Contact"
									target="_blank" 
									onClick={(event) => {
										event.preventDefault(); 
										window.open(
											window.location.origin + 
												"/Contact", 
												'_blank', 
												'toolbar=0,location=0,menubar=0'
												);												
										}}>Contact</Nav.Link>
						<Nav.Link href="/Dashboard">Dashboard</Nav.Link>
						<Nav.Link href="/Login">Login</Nav.Link>
							<NavDropdown title="Link" id="basic-nav-dropdown">
								<NavDropdown.Item href="/InstaSearch">InstaSearch</NavDropdown.Item>
								<NavDropdown.Item href="/SimpleSearch">SimpleSearch</NavDropdown.Item>
								<NavDropdown.Item href="/Seminar">Seminar</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/SheetCMS">SheetCMS</NavDropdown.Item>
								<NavDropdown.Item href="/SheetAPIV4">SheetAPIV4</NavDropdown.Item>
								<NavDropdown.Item href="/PushPull">PushPull</NavDropdown.Item>
								<NavDropdown.Item href="/ClientLog"
									target="_blank" 
									onClick={(event) => {
										event.preventDefault(); 
										window.open(
											window.location.origin + 
												"/ClientLog", 
												'_blank', 
												'toolbar=0,location=0,menubar=0'
												);												
										}}>ClientLog</NavDropdown.Item>
							</NavDropdown>
					</Nav>
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-success">Search</Button>
				</Form>
				</Navbar.Collapse>
			</Navbar>				
				{/*
				A <Switch> looks through all its children <Route>elements and renders the first one whose pathmatches the current URL. 
				Use a <Switch> any time you have multiple routes, but you want only oneof them to render at a time
				*/}

				<Switch>
{/*Pinned : insert additonal route(s) here*/}
					<Route exact path="/"><Home /></Route>
					<Route path="/About"><About /></Route>
					<Route path="/Dashboard"><Dashboard /></Route>
					<Route path="/Contact"><Contact /></Route>
					<Route path="/InstaSearch"><InstaSearch /></Route>
					<Route path="/SheetCMS"><SheetCMS /></Route>
					<Route path="/SheetAPIV4"><SheetAPIV4 /></Route>
					<Route path="/PushPull"><PushPull /></Route>
					<Route path="/SimpleSearch"><SimpleSearch /></Route>
					<Route path="/Login"><Login /></Route>
					<Route path="/ClientLog"><ClientLog /></Route>
					<Route path="/Seminar"><Seminar /></Route>
				</Switch>
				<hr/>	
		</Router>
		);
	}
// You can think of these components as "pages" in your app.
