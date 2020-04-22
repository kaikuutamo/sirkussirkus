
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


import './shoppingcart.css';

import convertNum from './convertnum';

var toCents = convertNum.toCents;
var toDecimals = convertNum.toDecimals;

class ShoppingCart extends React.Component {

constructor(props) {
    super(props);

    this.state = {
        cart: [],
        cartrender: [],
        total: 0,
        text: "",
        style: {"display": "none"},
        style2: {"display": "initial"}
            }

    
}


changeText = (arg) => {

    this.props.updateText(arg.target.value);
}


checkDeliveryAndCart = () => {

    
    setTimeout(() => {
        
        if (this.props.shoppingCart.length !== 0 && this.props.delivery !== "") {
        
            this.setState({
                style: {"display": "flex"},
                style2: {"display": "none"}
            })
    
        }
    
        else {
    
            this.setState({
                style: {"display": "none"},
                style2: {"display": "initial"}
            })
    
        }

    }, 100);

 

}


removeProduct = (arg) => {

var temporary = this.state.cart.slice();

temporary.splice(arg.target.value, 1);

this.props.updateCart(temporary);
this.renderCart(temporary);

this.checkDeliveryAndCart();

}

changeQuantity = (arg) => {
   

var index = arg.target.value[0];
var value = arg.target.value[1];

var temp = this.state.cart.slice();

if (value === "+") {


temp[index].quantity = temp[index].quantity + 1;


}

if (value === "-" && temp[index].quantity !== 1) {
    
    temp[index].quantity = temp[index].quantity - 1;

}

this.props.updateCart(temp);
this.renderCart(temp);
}



renderCart = (arg) => {

var temp;


if (arg === undefined) {
    temp = this.props.shoppingCart.slice();
}

else {
    temp = arg.slice();
}

var temp2 = temp.map((x, index) => {

var path = "/product?category=" + x.product.category + "&subcategory=" + x.product.subcategory + "&id=" + x.product.id;


if (x.selected !== null) {

var selected;

for (var k in x.product.options) {
    if (x.product.options[k].id === x.selected){
        selected = x.product.options[k];
    }
}





return (
    <div className="basket-product" key={index}>
      <div className="basket-product-wrap">
      <Link to={path}><img className="basket-product-pic" alt="Product" src={x.product.pic}></img></Link>
      <div>
      <p>{x.product.name}</p>
      <p>{x.product.choice}: {selected.name}</p>
      </div>
      </div>
      <div className="quantity-cart-wrap"><button value={index+"-"} onClick={this.changeQuantity}>-</button><p>{x.quantity}</p><button value={index+"+"} onClick={this.changeQuantity}>+</button></div>
      <div className="price-wrapper"><p><span className="onlymobile">Kappalehinta: </span>{selected.price} €</p></div>
      <div className="total-wrap"><p><span className="onlymobile">Yhteensä: </span>{toDecimals(toCents(selected.price) * x.quantity)} €</p></div>
      <div className="remove-wrap"><button onClick={this.removeProduct} value={index}>Poista</button></div>
    </div>
    )
}


else return (
    <div className="basket-product" key={index}>
      <div className="basket-product-wrap">
      <Link to={path}><img className="basket-product-pic" alt="Product" src={x.product.pic}></img></Link>
      <div>
      <p>{x.product.name}</p>
      
      </div>
      </div>
      <div className="quantity-cart-wrap"><button value={index+"-"} onClick={this.changeQuantity}>-</button><p>{x.quantity}</p><button value={index+"+"} onClick={this.changeQuantity}>+</button></div>
      <div className="price-wrapper"><p><span className="onlymobile">Kappalehinta: </span>{x.product.price} €</p></div>
      <div className="total-wrap"><p><span className="onlymobile">Yhteensä: </span>{toDecimals(toCents(x.product.price) * x.quantity)} €</p></div>
      <div className="remove-wrap"><button onClick={this.removeProduct} value={index}>Poista</button></div>
    </div>
    )

    })

   var total = 0;

    for (var s in temp) {
        
        if (temp[s].selected == null) {
            total = total + toCents(temp[s].product.price) * temp[s].quantity;
        }

        if (temp[s].selected !== null) {
            var price = 0;
            var options = temp[s].product.options;

           for (var h in options) {
               if (options[h].id === temp[s].selected) {
                   price = options[h].price;
                   total = total + toCents(price) * temp[s].quantity;
               }
           }
            
        }

    }

    total = toDecimals(total);

    this.setState({
        cart: temp,
        cartrender: temp2,
        total: total
    })


}


delivery = (e) => {

    this.props.updateDelivery(e.target.value);

    this.checkDeliveryAndCart();
}


/*--------------------------------------------------------------*/

componentDidMount () {

    window.scrollTo(0, 0);

    this.renderCart()
   
    
    if (this.props.delivery === "Nouto") {
        document.getElementById("i1").checked = true;
    }

    if (this.props.delivery === "Matkahuolto") {
        document.getElementById("i2").checked = true;
    }

    if (this.props.shoppingCart.length !== 0 && this.props.delivery !== "") {
        this.setState({
            style: {"display": "flex"},
            style2: {"display": "none"}
        })
    }
    


}

componentDidUpdate() {
    
}

render () {



return (

    <div id="shop-wrapper">
        <div id="the-cart">
        
        <h1>Ostoskori</h1>
        <div id="the-cart-info">
        <p>Tuote</p><p>Määrä</p><p>Kappalehinta</p><p>Yhteensä</p>
        </div>
        <div id="line1"></div>
        {this.state.cartrender}

        <div id="total-sum">
        <div></div><div></div>
        <div className="onlydesktop"><p>Yhteensä:</p></div>
        <div>
        <p><span className="onlymobile">Yhteensä: </span>{this.state.total} €</p>
        <p><span id="vattax">sis. alv.</span></p>
        </div>
        </div>

        <div id="text-area001">
        <h2>Jätä viesti:</h2>
        <div id="textarea-wrapper">
        <textarea onChange={this.changeText} defaultValue={this.props.text}></textarea>
        </div>
        </div>

        <div id="order-terms">
            <div id="order-terms-text">
            <h3>Toimitus- ja maksuehdot</h3>
            
            <form id="deliveryform">

            <div className="dselect">
            <div className ="dselect2">
            <input id="i1" type="radio" name="delivery" value="Nouto" onChange={this.delivery}></input><p>NOUTO 0€</p>
            </div>
            </div>
            <br></br>

            <p className="deliverytext">
            Nouto Turun varastomyymälästä torstaisin klo 16-18. <br></br>
            Nouto on mahdollista myös muina aikoina erikseen sovittaessa.<br></br> 
            Lonttistentie 12, 2. kerros, 20100 Turku.<br></br>
            Maksu paikan päällä käteisellä tai kortilla.<br></br>
            </p>

            <br></br><br></br>

            <div className="dselect">
            <div className ="dselect2">
            <input id="i2" type="radio" name="delivery" value="Matkahuolto" onChange={this.delivery}></input><p>MATKAHUOLTO alkaen 5€</p>
            </div>
            </div>

            <br></br>
            <p className="deliverytext">
            Toimitus Matkahuollon lähimpään toimituspisteeseen. <br></br>
            Hinta 5 € jokaista max 10 kg pakettia kohti.<br></br>
            (Poikkeuksena rengastrapetsit 10 €)<br></br>
            Toimitusaika 1-4 päivää.<br></br>
            Lasku sähköpostiin.<br></br>
            </p>

            </form>

            </div>
        </div>

        <div  id="continue-order">
            <Link style={{ textDecoration: 'none' }} to="/orderpage"><button style={this.state.style}>Jatka tilausta</button></Link><p id="selectprodel" style={this.state.style2}>Valitse tuotteet ja toimitustapa!</p>
        </div>

        </div>
    </div>

)


}

}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        shoppingCart: state.shoppingCart,
        text: state.text,
        delivery: state.delivery
    }
}

function mapDispatchToProps (dispatch) {
  
    return {
      updateCart: function (arg) {dispatch({
          type: "update",
          updatedcart: arg
      })},

      updateText: function (arg) {dispatch({
          type: "updatetext",
          thetext: arg
      })},

      updateDelivery: function (arg) {dispatch({
          type: "updatedelivery",
          thedelivery: arg
      })}
      
    }
    
  }

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

