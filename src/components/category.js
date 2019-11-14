
import React from 'react';

import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

import './category.css'

import LogoFooter from './logofooter';
import SocialFooter from './socialfooter';


class Category extends React.Component {



componentDidMount () {

    this._mounted = true;

    window.scrollTo(0, 0);

    var catPics = document.getElementsByClassName("category-tile-img");

    var jes = (k) => {

        

            catPics[k].addEventListener("load", () => {

                if (this._mounted === true) {
                
                catPics[k].style = "transition: opacity 1.5s, filter 0.2s; opacity: 1"; 

                }

            })

        }

    

    for (var k = 0; k < catPics.length; k ++) {
        jes(k);
    }



}

componentDidUpdate () {

    

    var catPics = document.getElementsByClassName("category-tile-img");

    var jes = (k) => {

        

            catPics[k].addEventListener("load", () => {

                if (this._mounted === true) {
                
                catPics[k].style = "transition: opacity 1.5s, filter 0.2s; opacity: 1"; 

                }

            })

        }

    

    for (var k = 0; k < catPics.length; k ++) {
        jes(k);
    }
    
}


    render () {


    var name = window.location.search.split("");
    name.shift()
    name[0] = name[0].toUpperCase();
    name = name.join("");

    if (name === "Ilmaakro") {name = "Ilma-akrobatia"}

    //console.log(this.props.products)

    var products, categoryText, num;

    

    if (window.location.search === "?jongleeraus") {
        products = this.props.products.categories[0];
        categoryText = "JONGLEERAUS (juggling) on tuhansia vuosia vanha taito, joka käsittää tänä päivänä paitsi heittojongleerauksen myös monta muuta esinemanipulaation (object manipulation) muotoa. Jongleerauspallot, -keilat ja renkaat kuuluvat perinteisiin jongleerausvälineisiin, ja nykyään jongleerauksen piiriin käsitetään myös lautasenpyöritys, diabolo, vanteiden käsittely (vannejongleeraus, vannetaide, huuppaus, jne.), hattumanipulaatio, sikarilaatikkotemput, devil stick, flower stick ja monet muut välineet ja käsittelytavat.";
        num = "0";
    }

    else if (window.location.search === "?ilmaakro") {
        products = this.props.products.categories[1];
        categoryText = "ILMA-AKROBATIA (aerial acrobatics) käsittää akrobatian, joka tapahtuu jonkin ripustetun välineen varassa. Ilma-akrobatiavälineitä ovat mm. vertikaalikankaat (aerial silk), vertikaali köysi (aerial rope), trapetsi (trapeze), rengastrapetsi (aerial hoop) ja remmit (aerial straps). Ilma-akrobatiasta on 2010-luvulla tullut suosittu osa fitness- ja tanssistudioiden tarjontaa, ja ammattilaisten lisäksi yhä useammat harrastajat haluavat hankkia omat välineensä. Ilma-akrobatiaan ryhdyttäessä tulee ensin tutustua huolellisesti välineisiin ja ennenkaikkea turvallisuusohjeisiin. Älä koskaan harjoittele yksin ja käytä aina alastulopatjaa.";
        num = "1";
    }

    else if (window.location.search === "?tasapainoilu") {
        products = this.props.products.categories[2];
        categoryText = "TASAPAINOILU on ihmiselle luonnollinen taiteilun laji ja sirkuksessa se on saanut vuosien saatossa mitä erikoisempia muotoja. Tasapainoilun piiriin luetaan yksipyöräily (unicycling), tasapainolauta (rolabola), tasapainopallo (walking globe), puujalat (stilt walking), käsilläseisonta (handstand), tasapainoliina (slackline) ja nuorallakävely (tightrope walking / looserope walking).";
        num = "2";
    }

    else if (window.location.search === "?muut") {
        products = this.props.products.categories[3]
        categoryText = "MUUT - Tästä kategoriasta löydät muihin kategorioihin sopimattomat sirkusvälineet (Taikuustarvikkeet), sirkustemppuilua sivuavat välineet ja lelut (Kendama) sekä sirkukseen liittyvät oheistuotteet (Kirjat ja DVD:t). Haluamme tarjota asiakkaillemme myös muutakin meistä hauskaa ajanvietettä ja harrastetta sekä laadukasta aihepiiriin sopivaa kirjallisuutta. Uusimpana alakategoriana Ulkoleikit, johon kuuluu Formula-Neppis-sarjan autot sekä Kelkkis-kelkat.";
        num = "3";
    }

    

    var temp1;

    var categoryTiles = products.subcategories.map(function (x){

        temp1 = "/sub-category?category="+num+"&subcategory=" + x.id;
        
        return (
            <Link className="tile-wrap" key={x.name} to={temp1}>
            <div className="category-tile">
            <div className="category-tile-empty"></div>
            <img className="category-tile-img" alt={x.name} src={x.pic}></img>
            <p>{x.name}</p>
            </div>
            </Link>
        )

    })

    
    

        return (
            <div id="cat-wrapper">

                <div id="cat-mainwrapper">

                <div id="sub-cat-tiles-wrapper">


                    <div className="subcat-tiles-emptyline"></div>
                    <h1>{name}</h1>
                    <div className="subcat-tiles-emptyline2"></div>

                    <div className="path-links-wrap-sub">  
                        <div className="path-links-sub">
                       <Link to="/categories"><p>Sirkusvälineet</p></Link> <p>|</p> <p id="pathlinksubtext2">{name}</p>
                        </div>
                    </div> 

                    <div id="category-text">
                        <p>{categoryText}</p>
                    </div>

                    <div className="categories-tiles">
                    {categoryTiles}
                    </div>

                </div>

                <LogoFooter />
                <SocialFooter />

                </div>

            </div>
        )


    }


}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Category);