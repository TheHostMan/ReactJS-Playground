import React, { Component } from 'react';
import Logo from '../UI/Logo/Logo';
import LandingSection from './LandingSection/LandingSection';
import NavBar from './NavBar/NavBar';

class Header extends Component {
	render() {
		return (
			<div className="Header">
				<Logo />
				<NavBar />
				<LandingSection />
			</div>
		);
	}
}

export default Header;
