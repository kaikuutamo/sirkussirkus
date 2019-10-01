
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
        categoryText = "JONGLEERAUS. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        num = "0";
    }

    else if (window.location.search === "?ilmaakro") {
        products = this.props.products.categories[1];
        categoryText = "ILMA-AKROBATIA. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        num = "1";
    }

    else if (window.location.search === "?tasapainoilu") {
        products = this.props.products.categories[2];
        categoryText = "TASAPAINOILU. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        num = "2";
    }

    else if (window.location.search === "?muut") {
        products = this.props.products.categories[3]
        categoryText = "MUUT. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
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