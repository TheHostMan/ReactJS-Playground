import React from 'react';

import homeImg from '../../../assets/MainPage/Images/Home_Button.png';
import fbHeader from '../../../assets/MainPage/Images/Facebook_button_red.png';
import instaHeader from '../../../assets/MainPage/Images/Insta_button_red.png';

import './NavBar.scss';

const navbar = () => {
	return (
		<article className="NavBar">
			<nav>
				<ul>
					<button className="homeArea">
						<img className="homeImage" src={homeImg} alt="Homepage" />
					</button>

					<li>
						<a href="/">ΕΤΑΙΡΕΙΑ</a>
					</li>

					<li>
						<a href="/">ΟΜΙΛΟΣ ΜΠΟΖΙΟΝΕΛΑΣ</a>
					</li>

					<li>
						<a href="/">ΣΥΝΕΡΓΑΤΕΣ</a>
					</li>

					<li>
						<a href="/">ΕΠΙΚΟΙΝΩΝΙΑ</a>
					</li>

					<div className="buttonArea">
						<button className="buttonChild">
							<img src={fbHeader} alt="Our Facebook Profile" />
						</button>

						<button className="buttonChild">
							<img src={instaHeader} alt="Our Instagram Profile" />
						</button>
					</div>
				</ul>
			</nav>
		</article>
	);
};

export default navbar;
