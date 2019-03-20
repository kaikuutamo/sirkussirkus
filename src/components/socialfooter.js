import React from 'react';

import './socialfooter.css';


class SocialFooter extends React.Component {


render () {

return (

    <div id="socialfooter-wrapper">
        
        <div id="social-logos">
            <a href="https://www.facebook.com/kuutamosirkus/" target="_blank" rel="noopener noreferrer"><img alt="Social logo" src="/logo-pics/facebook.png"></img></a>
            <a href="https://www.instagram.com/kaikuutamo/" target="_blank" rel="noopener noreferrer"><img alt="Social logo" src="/logo-pics/instagram.png"></img> </a>  
            <a href="https://www.youtube.com/user/kaikuutamo/videos" target="_blank" rel="noopener noreferrer"><img alt="Social logo" src="/logo-pics/youtube.png"></img></a>
        </div>

        <div id="social-text">
            <p>Lonttistentie 14, Turku</p>
            <p>040 754 6182</p>
            <p>kauppa@sirkussirkus.com</p>
        </div>

    </div>

)


}

}

export default SocialFooter;