
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


componentDidMount () {
    window.scrollTo(0, 0);
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
    
    <Link className="tile-wrap" key={x.name}  to={path + x.id} >
    
            <div className="category-tile">
            
            <img alt={x.name} src={x.pic}></img>    
            
            <div className="tile-wrap-product-name"><p>{x.name}</p></div>
                 
            </div>
            <div className="tile-wrap-product-price"><p>{x.price} €</p></div>
       
            </Link>
               
)

})

return (

<div id="sub-cat-wrapper">

<div id="sub-cat-mainwrapper">

<div id="sub-cat-tiles-wrapper">
    <h1>{name}</h1>
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