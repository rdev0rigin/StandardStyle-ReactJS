import * as React from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { ButtonComponent } from './components/button/button.component';
import { LandingComponent } from './components/landing/landing.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

const logo = require('./logo.svg');

class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="App">
					<header className="App-header">
						<img
							src={logo}
							className="App-logo"
							alt="logo"
						/>
						<h1 className="App-title">{'{ Standard Style }'}</h1>
					</header>
					<div
						className="main-layout"
					>
						<SideBarComponent/>
						<div
							className="content"
						>
							<Route
								path="/"
								exact={true}
								component={LandingComponent}
							/>
							<Route
								path="/button"
								render={() => {
									return (<ButtonComponent/>);
								}}
							/>
							<Route
								path="/background"
								render={() => {
									return (<ButtonComponent/>);
								}}
							/>
						</div>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
