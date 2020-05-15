

import React from 'react';

import './theshop.css';

import LogoFooter from './logofooter';
import SocialFooter from './socialfooter';

class TheShop extends React.Component {


componentDidMount () {

        window.scrollTo(0, 0); 
        
}

render () {

    return (

        <div id="theshop-wrapper">
        
            <div id="theshop-main">

                <div id="title">
                <h1>Sirkussirkus Putiikki</h1>
                <p>Rehellistä kauppaa ja vain parhaita sirkusvälineitä jo vuodesta 2005!</p>
                <p>HUOM! Muutimme katutasosta saman rakennuksen toiseen kerrokseen.</p>
                <p>Kauppa muuttui myös varastomyymäläksi. Noudot torstaisin tai sopimuksen mukaan.</p>
                <p></p>
                <h1>COVID-19</h1>
                <p>Toimimme toistaiseksi normaalisti valtakunnallisen ohjeistuksen puitteissa.</p>
                <p>Olemme yhä auki torstaisin klo 16-18.</p>
                <p>Noudot onnistuvat myös muina aikoina, jos asiasta erikseen sovitaan.</p>
                <p>Voimme tuoda noudettavat tavarat myös parkkipaikalle sovittaessa.</p>
                <p>Toimitamme tavaraa Matkahuollossa normaalisti.</p>
                </div>


                <div id="theshop-stuff">
                

                <div id="theshop-contact-text">
                    YHTEYSTIEDOT
                    <p>Kai Kuutamo | 040 754 6182 | kauppa@sirkussirkus.com</p>
                    <p>Lonttistentie 12, 2. kerros, 20100 Turku.</p>
                    <p>Noin 500 metriä Turun Linja-autoasemalta.</p>
                    <br></br>
                    <br></br>
                    TOIMITUS
                    <p>Toimitus Matkahuollon pakettina alkaen 5 € (maksimissaan 10 kg paketti)</p>
                    <p>Poikkeuksena rengastrapetsit 10 €</p>
                    <p>Toimitusaika 1-4 päivää.</p>
                    <p>Nouto onnistuu torstaisin klo 16-18 sekä muulloin erikseen sovittaessa.</p>
                    <p>Käytämme Matkahuoltoa ympäristöystävällisyyden, luotettavuuden ja nopeuden johdosta.</p>
                    </div>

                    <div id="iframe-wrap-main">
                    <div id="iframe-wrapper">
                    <iframe title="Shop Location" id="themap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1967.1617470915423!2d22.27199631606128!3d60.45905288206834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76567c380175%3A0x18f5a5addc379f9e!2sSirkussirkus%20Kaj-Mikael%20Sch%C3%BCtt!5e0!3m2!1sen!2sfi!4v1583441614440!5m2!1sen!2sfi"></iframe>
                    </div>
                    </div>


                <div id="theshop-text-wrap">  
                <div id="theshop-text">
                
                        <h2>Tervetuloa Sirkussirkukseen!</h2>
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

                    <div className="theshop-img-wrapper">
                    <img src="/sponsor-pics/julkisivu.jpg" alt="Julkisivu"></img>
                    </div>



                    <div className="theshop-img-wrapper">
                    <img src="/sponsor-pics/putiikki.jpg" alt="Sirkussirkus sisältä"></img>
                    </div>


                        <div id="theshop-text-wrap2">
                        <div id="theshop-text2">
                        <h2>Historia</h2>
                        <p>
                        Sirkustaiteilija Kai Kuutamo perusti Sirkussirkus Putiikin alunperin Jarrumiehenkadulle Turkuun vuonna 2005. Putiikki toimi tässä tilassa aina vuoteen 2010 asti. Sirkussirkus Putiikki oli suljettuna kokonaan vuodet 2011-2015 Aasiassa tapahtuvan esitys- ja opetustyön johdosta ja se avattiin suomeentumisen myötä uudestaan verkkokauppana maaliskuussa vuonna 2016. Marraskuussa 2017 Sirkussirkus muutti uuteen osoitteeseen Lonttistentie 14, Turku. Kivijalkakauppaa pidettiin tällä paikalla reilut kaksi vuotta, jonka jälkeen jouduimme vuokrasopimuksen loputtua siirtymään saman rakennuksen toiseen kerrokseen. Maaliskuussa 2020 kivijalkakauppa muuttui uusien tilojen ehdoilla varastomyymäläksi ainakin toistaiseksi. Nykyinen osoite on Lonttistentie 12, 2. kerros, Turku.
                        <br></br><br></br>
                        Sirkussirkus Putiikin tila on myös Kai Kuutamon toimisto, työtila ja varasto. Pyrimme pitämään yllä rentoa tunnelmaa ja tarjoamaan asiakkaille yksilöllistä palvelua. Sirkussirkus varastomyymälässä palvelee myös usein Kai Kuutamon lisäksi sirkustaiteilija ja myyjä Marianne Vaalimaa.
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