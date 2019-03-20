
import React from 'react';

import './sponsors.css';

import LogoFooter from './logofooter';
import SocialFooter from './socialfooter';

class Sponsors extends React.Component {

    componentDidMount () {
        window.scrollTo(0, 0);
    }


    render () {

        return (

            <div id="sponsors-wrapper">
                
                <div id="sponsors-mainpage">
                <h1>Sponsorit</h1>
                    <p className="sponsors-text">Sirkussirkus on sponsoroinut valikoituja yksilöitä ja hankkeita jo vuodesta 2009.</p>

                    <div id="sponsor-pics-wrapper">
                    
                    <div id="sponsor-pics">

                    <a href="http://www.herrakoskinen.com/" target="_blank" rel="noopener noreferrer"><img alt="Sponsor" src="/sponsor-pics/sponsor1.jpg"></img></a>
                    <a href="http://www.petterwadsten.com/" target="_blank" rel="noopener noreferrer"><img alt="Sponsor" src="/sponsor-pics/sponsor2.jpg"></img></a>
                    <a href="http://www.jukkasalminen.com/" target="_blank" rel="noopener noreferrer"><img alt="Sponsor" src="/sponsor-pics/sponsor3.jpg"></img></a>
                    <a href="http://www.sirkussirkus.com/circuskampot/" target="_blank" rel="noopener noreferrer"><img alt="Sponsor" src="/sponsor-pics/sponsor4.jpg"></img></a>
                    <a href="http://koti.kapsi.fi/~hel5am/sds/" target="_blank" rel="noopener noreferrer"><img alt="Sponsor" src="/sponsor-pics/sponsor5.jpg"></img></a>
                    <a href="http://www.sirkussirkus.com/njc" target="_blank" rel="noopener noreferrer"><img alt="Sponsor" src="/sponsor-pics/sponsor6.jpg"></img></a>
                    <a href="http://supiainen.com/?page_id=94" target="_blank" rel="noopener noreferrer"><img alt="Sponsor" src="/sponsor-pics/sponsor7.jpg"></img></a>

                    </div>

                    </div>

                <div className="emptyspace"></div>
                <LogoFooter />
                <div className="emptyspace"></div>
                <SocialFooter />

                </div>

            </div>

        )


    }


}


export default Sponsors;