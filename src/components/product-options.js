
import React from 'react';
import {connect} from 'react-redux';

import cartPic from './pictures/shopping-cart.png';

import {Link} from 'react-router-dom';

import LogoFooter from './logofooter';
import SocialFooter from './socialfooter';


class ProductOptions extends React.Component {

    
constructor(props) {
    super(props);

    this.state = {
        picture: "",
        product: "",
        selected: "",
        price: "",
        quantity: "",
        pictures: ""
    }

}

handleChange = (arg) => {

var options = this.props.product.options.slice();
var selProduct;

for (var k in options) {
    if (options[k].id === arg.target.value) {
        selProduct = options[k];
    }
}

this.setState({
    selected: arg.target.value,
    price: selProduct.price
})


}

quantity = (arg) => {
    
if (arg.target.value === "+") {
    this.setState({
        quantity: this.state.quantity + 1
    })
}

if (arg.target.value === "-" && this.state.quantity !== 1) {
    this.setState({
        quantity: this.state.quantity - 1
    })
}

}

changePic = (arg) => {
    
if (arg.target.className === "small-product-pic") {
    
    this.setState({
       picture: arg.target.src 
    })

}

}

sendToStore = () => {
    
    var object = {
        product: this.state.product,
        quantity: this.state.quantity,
        selected: this.state.selected
    }

    this.props.addProduct(object);
}


componentDidMount () {

    window.scrollTo(0, 0);

    var pictures = this.props.product.pics.slice();

   
    pictures = pictures.map(function (x, change) {
        return (
            <img className="small-product-pic" src={x} alt="Product" key={x}></img>
        )
    })

    this.setState({
        product: this.props.product,
        selected: this.props.product.options[0].id,
        price: this.props.product.options[0].price,
        quantity: 1,
        picture: this.props.product.pic,
        pictures: pictures   
    })

}



render () {

var product = this.props.product;    

var options = this.props.product.options;


var lineBreak = <br></br>;
var lineBreak2 = <br></br>;
var lineBreak3 = <br></br>;
var lineBreak4 = <br></br>;


var linkText = null;
var lineBreakLink = null;

var linkText2 = null;
var linkBreak2 = null;

if (product.link.length !== 0) {
    linkText = (
                <p><a rel="noopener noreferrer" href={product.link} target="_blank">{product.linktext}</a></p>
            )
    if (product.text2.length !== 0) {lineBreakLink = <br></br>}
}


if (product.link2.length !== 0) {

    linkText2 = (

        <p><a rel="noopener noreferrer" href={product.link2} target="_blank">{product.linktext2}</a></p>

    )
    
    linkBreak2 = <br></br>;
}


if (product.text2.length === 0 && product.link.length === 0 && product.link2.lenght === 0) {lineBreak = null}

if (product.text3.length === 0) {lineBreak2 = null}

if (product.text4.length === 0) {lineBreak3 = null}

if (product.text5.length === 0) {lineBreak4 = null}



var style = {};

if (product.pics.length === 0) {
    style = {display: "none"}
}


var selection = options.map(function (x){


return (
    <option className="options" key={x.id} value={x.id}>{x.name} {x.price} €</option>
)
})


var pathName1 = this.props.products.categories[product.category].name;
var pathName2;
var subCategories = this.props.products.categories[product.category].subcategories;

for (var k in subCategories) {
    if (subCategories[k].id === product.subcategory) {
        pathName2 = subCategories[k].name;
    }
}

var path1 = "/categories/?" + this.props.products.categories[product.category].id;
var path2 = "/sub-category?category=" + product.category + "&subcategory=" + product.subcategory;


return (

<div className="product-page-wrapper">

        <div className="product-main-wrapper">

        <div className="path-links-wrap">  
        <div className="path-links">
        <Link to='/categories'><p>Sirkusvälineet</p></Link> <p>|</p> <Link to={path1}><p>{pathName1}</p></Link> <p>|</p> <Link to={path2}><p>{pathName2}</p></Link>
        </div>
        </div> 

        <div className="product-wrapper2">

        <div className="product-pics">

        <div className="product-pic">
            <img className="the-pic" alt={product.name} src={this.state.picture}></img>
        </div>

        <div onClick={this.changePic} className="small-product-pics">
        <img className="small-product-pic" src={product.pic} alt="Product" style={style}></img>
        {this.state.pictures}

        </div>


        </div>

        <div className="product-info">

            <h1>{product.name}</h1>
            <h2>{this.state.price} €</h2>

            <p className="choice">{product.choice}:</p>
            <label>
            <select value={this.state.selected} onChange={this.handleChange}>
            {selection}
            </select>
            </label>

        <div className="product-quantity-wrap">
        <p className="quantity-number">Kappalemäärä:</p>
        <div className="quantity-button-wrap">
            <button value="-" onClick={this.quantity}>-</button><p className="quantity1234">{this.state.quantity}</p><button value="+" onClick={this.quantity}>+</button>
        </div>
        </div>

        <div className="add-cart">
            <button onClick={this.sendToStore}><img alt="Shopping Cart" src={cartPic}></img>Lisää ostoskoriin</button>
        </div>

        

        <div className="product-text">

            <p>{product.text}</p>
            {lineBreak}
            {linkText}
            {lineBreakLink}
            <p>{product.text2}</p>
            {lineBreak2}
            <p>{product.text3}</p>
            {lineBreak3}
            <p>{product.text4}</p>
            {lineBreak4}
            <p>{product.text5}</p>
            {linkBreak2}
            {linkText2}

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


const mapStateToProps = (state) => {
    return {
        products: state.products,
        shoppingCart: state.shoppingCart
    }
}

function mapDispatchToProps (dispatch) {
  
    return {
      addProduct: function (arg) {dispatch({
          type: "add",
          product: arg
      })}
      
    }
    
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProductOptions);