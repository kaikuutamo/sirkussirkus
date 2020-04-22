
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './orderconfirmation.css';

import convertNum from './convertnum';

var toCents = convertNum.toCents;
var toDecimals = convertNum.toDecimals;

class OrderConfirmation extends React.Component {



componentDidMount () {
    window.scrollTo(0, 0);


}

render () {

var deliveryText;

if (this.props.delivery === "Nouto") {
        
    deliveryText = "NOUTO 0 €. Nouto Turun varastomyymälästä torstaisin klo 16-18. Nouto on mahdollista myös muina aikoina erikseen sovittaessa. Lonttistentie 12, 2. kerros, 20240 Turku. Maksu paikan päällä käteisellä tai kortilla."
}

if (this.props.delivery === "Matkahuolto") {
        
    deliveryText = "MATKAHUOLTO alkaen 5 €. Toimitus Matkahuollon paketissa. Hinta 5 € jokaista max 10 kg pakettia kohti. (Poikkeuksena rengastrapetsit 10 €) Toimitusaika 1-4 päivää. Lasku sähköpostiin."
}

var products = this.props.shoppingcart;
var totalSum = 0;
var productsRender = products.map(function (x) {

if (x.selected !== null) {

var choice;

for (var k in x.product.options) {

    if (x.selected === x.product.options[k].id) {
        choice = x.product.options[k]
    }
}

totalSum = totalSum + x.quantity * toCents(choice.price);

return (
<div key={Math.random()} className="confirmation-product">
<img alt="Product" src={x.product.pic}></img>
<p>Tuote: {x.product.name}</p>
<p>{x.product.choice}: {choice.name}</p>
<p>Kappalemäärä: {x.quantity}</p>
<p>Kappalehinta: {choice.price} €</p>
<p>Yhteensä: {toDecimals(x.quantity * toCents(choice.price))} €</p>
<div className="confirmation-line"></div>
</div>
)

}

else {

totalSum = totalSum + x.quantity  * toCents(x.product.price);

return (
<div key={Math.random()} className="confirmation-product">
<img alt="Product" src={x.product.pic}></img>
<p>Tuote: {x.product.name}</p>
<p>Kappalemäärä: {x.quantity}</p>
<p>Kappalehinta: {x.product.price} €</p>

<p>Yhteensä: {toDecimals(x.quantity * toCents(x.product.price))} €</p>
<div className="confirmation-line"></div>
</div>
)

}


})

totalSum = toDecimals(totalSum);

return (
        <div id="order-confirmation-wrap">
            <div id="confirmation-wrapper">
            <h1>Tilausvahvistus</h1>
           <h2>Yhteystiedot</h2>
           <div id="contact-information-confirmation">
            <p>{this.props.information.firstname} {this.props.information.lastname}</p>
            <p>{this.props.information.address}</p>
            <p>{this.props.information.zipcode}</p>
            <p>{this.props.information.city}</p>
            <p>{this.props.information.phonenumber}</p>
            <p>{this.props.information.email}</p>
           </div>

           <h2>Tuotteet</h2>
           <div id="product-order-confirmation">
           <div className="confirmation-line"></div>
            {productsRender}
           </div>

            <div id="total-price-conf-wrap">
            <p id="total-price-conf">Yhteensä: {totalSum} €</p>
            <p><span id="vattax2">sis. alv.</span></p>
            </div>
            
            <div id="text-confirmation">
            <h3>Viesti:</h3>
            <p>{this.props.text}</p>
            </div>
            
            <div id="order-terms2">
            <div id="order-terms-text2">
            <h3>Toimitus- ja maksuehdot</h3>
            <p>
            {this.props.delivery}
            </p>
            <br></br>
            <p>
            {deliveryText}
            </p>
            </div>
        </div>

            <div id="confirmation-continue-buttons-wrap">
            <div id="confirmation-continue-buttons">
                <Link style={{ textDecoration: 'none' }} to="/orderpage"><button>Takaisin</button></Link><Link style={{ textDecoration: 'none' }} to="/orderstatus"><button>Lähetä</button></Link>
            </div>
            </div>

            </div>
        </div>

)

    }

}

const mapStateToProps = (state) => {
    return {
        information: state.information,
        shoppingcart: state.shoppingCart,
        text: state.text,
        delivery: state.delivery
    }
}


export default connect(mapStateToProps)(OrderConfirmation);