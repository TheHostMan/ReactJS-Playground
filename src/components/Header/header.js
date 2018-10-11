import React, {Component} from 'react';
import Logo from '../UI/Logo/Logo'
import LandingSection from './LandingSection/LandingSection'

class Header extends Component{


    render(){

        return(
            <div className="Header">
                <Logo />
                <LandingSection />
            </div>
        )
    }

}

export default Header;