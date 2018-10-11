import React from 'react';

import './Logo.scss'
import Logo from '../../../assets/Epikoinonia/Bozionelos_logo_epi.png'
import LanguageIcon from '../../../assets/MainPage/Images/Languages.png'

const logo = () =>{
    return (
        <article className="Logo">
            <img className="logoImg" src={Logo} alt="Logo" />
          <div className="languageArea">
             <img className="languageIcon" src={ LanguageIcon} alt="Language Icon" /> 
            <span>
             <a><h4>ελ</h4></a>
             <a><h4>en</h4></a>
            </span>
          </div>
        </article>
    )
}

export default logo;