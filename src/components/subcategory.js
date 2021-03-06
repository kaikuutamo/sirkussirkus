
import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './subcategory.css'

import LogoFooter from './logofooter';
import SocialFooter from './socialfooter';


class SubCategory extends React.Component {

constructor(props) {
    super();
}

componentWillUnmount (){
    this._mounted = false;
    
 }


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

render() {

var query = window.location.search.split("&");
var category = query[0].split("=")[1];
var catId = query[1].split("=")[1];

var array = this.props.products.categories[category].subcategories;
var products;


for (var k in array) {
    if (array[k].id === catId) {
        products = array[k];
    }
}

var name = products.name;

var path = "/product?category=" + category + "&subcategory=" + catId + "&id=";

const categoryTiles = products.products.map(function (x){

return (
    
    <Link className="tile-wrap" key={x.id}  to={path + x.id} >
    
            <div className="category-tile">
            <div className="category-tile-empty"></div>
            <img className="category-tile-img" alt={x.name} src={x.pic}></img>    
            
            <div className="tile-wrap-product-name"><p>{x.name}</p></div>
                 
            </div>
            <div className="tile-wrap-product-price"><p>{x.price} €</p></div>
       
            </Link>
               
)

});


var categoryPic = null;

if (products.pic2.length !== 0) {
    categoryPic = (
        <div id="subcat-presentation-pic">
        <img alt="Subcategory" src={products.pic2}></img>
        
        </div>
    )
}

var pathSub = "/category?" + this.props.products.categories[category].id;
var pathSubName = this.props.products.categories[category].name;

return (

<div id="sub-cat-wrapper">

<div id="sub-cat-mainwrapper">


{categoryPic}

<div id="sub-cat-tiles-wrapper">


    <div className="subcat-tiles-emptyline"></div>
    <h1>{name}</h1>
    <div className="subcat-tiles-emptyline2"></div>
    
    <div className="path-links-wrap-sub">  
        <div className="path-links-sub">
        <Link to="/categories"><p>Sirkusvälineet</p></Link> <p>|</p> <Link to={pathSub}><p>{pathSubName}</p></Link> <p>|</p> <p id="pathlinksubtext">{name}</p>
        </div>
    </div> 
    
    <div className="categories-tiles">
    {categoryTiles}
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

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(SubCategory);