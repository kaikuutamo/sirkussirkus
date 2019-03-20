

import React from 'react';

import './theshop.css';

import LogoFooter from './logofooter';
import SocialFooter from './socialfooter';

class TheShop extends React.Component {


render () {

    return (

        <div id="theshop-wrapper">
        
            <div id="theshop-main">

                <h1>Putiikki</h1>


                <div id="theshop-stuff">

                <div id="theshop-text-wrap">  
                <div id="theshop-text">
                
                        <h2>Tervetuloa Sirkussirkus Putiikkiin!</h2>
                        <br></br>
                        <p>Sirkussirkus ei pyri tarjoamaan laajinta valikoimaa, vaan pikemminkin vain parasta laatua.</p> 
                        <br></br>
                        <p>Hinta-laatusuhde on suuri vaikuttaja tuotteiden valikoinnissa myyntilistallemme.</p> 
                        <br></br>
                        <p>Toinen painava tekijä on ammattilaisten ja tosiharrastajien käyttökokemukset.</p> 
                        <br></br>
                        <p>Jos tuotteista on kysyttävää, tai listalla ei ole tuotetta jota etsit, niin otathan yhteyttä sähköpostitse.</p> 
                        <br></br>
                        <p>Kaikki hinnat ovat kappalehintoja, ellei toisin mainita.</p>
                        <br></br>
                        <p>Sirkusvälineiden käyttö tapahtuu aina omalla vastuulla.</p>

                </div>
                </div>    

                    <div id="theshop-img-wrapper">
                    <img src="/sponsor-pics/putiikki.jpg" alt="The Shop"></img>
                    </div>

                    <div id="theshop-contact-text">
                    <p>Sirkussirkus Putiikki</p>
                    <p>Lonttistentie 14, 20100 Turku.</p>
                    <p>700 metriä Turun Linja-autoasemalta.</p>
                    <p>Aukiolo satunnaisesti ja sopimuksen mukaan.</p>
                    <p>040 754 6182 | kauppa@sirkussirkus.com</p>
                    </div>

                    <div id="iframe-wrap-main">
                    <div id="iframe-wrapper">
                    <iframe title="Shop Location" id="themap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1967.1484914941814!2d22.272313816061224!3d60.459271682068426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76f15283dc33%3A0xbbef5306019624bd!2sLonttistentie+14%2C+20100+Turku!5e0!3m2!1sfi!2sfi!4v1552640759098"></iframe>
                    </div>
                    </div>

                        <div id="theshop-text-wrap2">
                        <div id="theshop-text2">
                        <h2>Historia</h2>
                        <p>
                        Putiikki sijaitsi alkuaikoina Jarrumiehenkadulla Turussa.
                        Putiikki oli suljettuna kokonaan vuodet 2011-2015 ulkomailla työskentelyn johdosta,
                        ja se avattiin uudestaan pelkkänä verkkokauppana maaliskuussa vuonna 2016.
                        Marraskuussa 2017 uusi Putiikki avattiin osoitteeseen Lonttistentie 14, Turku. 
                        </p>
                        </div>

                    </div>

                </div>

                <div className="product-line"></div>

                <div className="emptyspace"></div>
                <LogoFooter />
                <div className="emptyspace"></div>
                <SocialFooter />

            </div>

        </div>

    )


}

}


export default TheShop;