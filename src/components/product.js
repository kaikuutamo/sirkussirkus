
import React from 'react';
import {connect} from 'react-redux';

import './product.css';

import ProductOptions from './product-options';
import ProductNormal from './product-normal';

class Product extends React.Component {

constructor(props) {
    super();
}


render () {


var query = window.location.search.split("&");
var category = query[0].split("=")[1];
var subcategory = query[1].split("=")[1];
var id = query[2].split("=")[1];

var subcategories = this.props.products.categories[category].subcategories;
var products;
var product;

for (var k in subcategories) {
    if (subcategories[k].id === subcategory) {
        products = subcategories[k].products;
    }
}

for (var s in products) {
    if (products[s].id === id) {
        product = products[s];
    }
}

/* --------------------------------------- */

if (product.options !== null) {
    return (
        <ProductOptions product={product}/>
    )
}

if (product.options == null) {
    return (
        <ProductNormal product={product} />
    )
}


}

}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Product);

