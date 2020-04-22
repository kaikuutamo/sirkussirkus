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
            <p>Sirkussirkus</p>
            <p>Lonttistentie 12, 2. kerros, Turku</p>
            <p>Olemme paikalla TO klo 16-18</p>
            <p>Kai Kuutamo | 040 754 6182</p>
            <p>kauppa@sirkussirkus.com</p>
        </div>

        <div id="uutiskirje">
            <a class="uutiset" href="https://mailchi.mp/be8508f69685/sirkussirkus" target="uutiskirje" rel="noopener noreferrer">Tilaa Uutiskirje</a>
        </div>


    </div>

)


}

}

export default SocialFooter;