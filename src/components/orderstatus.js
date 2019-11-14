


import React from 'react';
import {connect} from 'react-redux';

import FormDat from 'form-data';


import './orderstatus.css';

import convertNum from './convertnum';
var toCents = convertNum.toCents;
var toDecimals = convertNum.toDecimals;



class OrderStatus extends React.Component {


emptyCart = () => {
   this.props.removeAll(); 
}


componentDidMount () {
    
/* ---------- Order email ---------- */

var cart = this.props.shoppingcart;
var cartText = ``;
var totalSum = 0;

for (var k in cart) {

var temp = ``;

var selected = cart[k].selected;
var productTemp;
var options = cart[k].product.options;

for (var s in options) {
    if (options[s].id === selected) {
        productTemp = options[s];
    }
}

if (selected !== null) {

temp = `
Tuote: ${cart[k].product.name}
Kappalemäärä: ${cart[k].quantity}
${cart[k].product.choice}: ${productTemp.name}
Kappalehinta: ${productTemp.price} €
Yhteensä: ${toDecimals(cart[k].quantity * toCents(productTemp.price))} €
`;

totalSum = totalSum + cart[k].quantity * toCents(productTemp.price);

}

else {

temp = `
Tuote: ${cart[k].product.name}
Kappalemäärä: ${cart[k].quantity}
Kappalehinta: ${cart[k].product.price} €
Yhteensä: ${toDecimals(cart[k].quantity * toCents(cart[k].product.price))} €
`;

totalSum = totalSum + cart[k].quantity * toCents(cart[k].product.price);

} 

cartText = cartText + temp;

}
 
totalSum = toDecimals(totalSum);

var info = this.props.information;

var emailText = `

Yhteystiedot:

${info.firstname} ${info.lastname}
${info.address}
${info.zipcode}
${info.city}
${info.phonenumber}
${info.email}


Tuotteet:
${cartText}
Yhteensä: ${totalSum} €


Viesti: 

${this.props.text}

Toimitus:

${this.props.delivery}

Olemme vastaanottaneet tilauksenne. Ilmoitamme, kun paketti on toimituksessa. Lähetämme laskun sähköpostiinne.

`;

/* ---------Form and sending----------- */

var data = new FormDat();
var fileName = Date.now() + "";
var customerMail = info.email;


data.append("id", fileName);
data.append("order", emailText);
data.append("customermail", customerMail)


var request = new XMLHttpRequest();
request.open("POST", "upload.php", true);
request.send(data);

var request2 = new XMLHttpRequest();
request2.open("POST", "sendmail.php", true);
request2.send(data);

/* ------------------------------- */

this.emptyCart();

localStorage.clear();

}



render () {



return (
    
    <div id="orderstatus-wrapper">
        
        <div id="orderstatus-cont">

        <h1>Kiitos tilauksesta!</h1>
        <p>Lähetämme sinulle tilausvahvistuksen pian.</p>
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

function mapDispatchToProps (dispatch) {
  
    return {
      removeAll: function () {dispatch({
          type: "remove"
          
      })}
      
    }
    
  }


export default connect(mapStateToProps, mapDispatchToProps)(OrderStatus);