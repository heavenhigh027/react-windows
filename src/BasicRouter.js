import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
	} from "react-router-dom";
/*Pinned : insert additonal path(s) here*/
import Home from "./views/Home.js"	
import About from "./views/About.js"
import Dashboard from "./views/Dashboard.js"
import Contact from "./views/Contact.js"
import InstaSearch from "./views/InstaSearch.js"
import SheetAPI from "./views/SheetAPI.js"

/*
This site has multiple pages, all of which are rendered dynamically in the browser (not server rendered).
Although the page does not ever refresh, notice how React Router keeps the URL up to date as you navigate
through the site. This preserves the browser history, making sure things like the back button and bookmarks
work properly.
*/

export default function BasicRouter() {
	return (
		<Router>
			<div>
				<ul>
					{/*Pinned : insert additonal link(s) here*/}
					<li><Link to="/">Home</Link></li>
					<li><Link to="/About">About</Link></li>
					<li><Link to="/Dashboard">Dashboard</Link></li>
					<li><Link to="/Contact">Contact</Link></li>
					<li><Link to="/InstaSearch">InstaSearch</Link></li>
					<li><Link to="/SheetAPI">SheetAPI</Link></li>
				</ul>
				<hr />
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
					<Route path="/SheetAPI"><SheetAPI /></Route>
				</Switch>
			</div>
		</Router>
		);
	}
// You can think of these components as "pages" in your app.
