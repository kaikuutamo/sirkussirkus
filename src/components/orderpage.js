
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './orderpage.css';


class OrderPage extends React.Component {



 changeText = (arg) => {
    this.props.updateText(arg.target.value);
 }

  changeInfo = (arg) => {

    var info = this.props.information;

    var temp = "" + arg.target.name;

    info[temp] = arg.target.value;

   this.props.updateInformation(info);

  }

componentDidMount () {
    window.scrollTo(0, 0);
}


render () {

return (
<div id="orderpage-wrapper">
    <div id="order-container">
     <h1>Yhteystiedot</h1>   
    <div id="order-information-cont">
    

        <div className="order-info-box">
        <p>Etunimi:</p>
        <input defaultValue={this.props.information.firstname} name="firstname" onChange={this.changeInfo} type="text"></input>
        </div>

        <div className="order-info-box">
        <p>Sukunimi:</p>
        <input defaultValue={this.props.information.lastname} name="lastname" onChange={this.changeInfo} type="text"></input>
        </div>

        <div className="order-info-box">
        <p>Katuosoite:</p>
        <input defaultValue={this.props.information.address} name="address" onChange={this.changeInfo} type="text"></input>
        </div>

        <div className="order-info-box">
        <p>Postinumero:</p>
        <input defaultValue={this.props.information.zipcode} name="zipcode" onChange={this.changeInfo} type="text"></input>
        </div>

        <div className="order-info-box">
        <p>Postitoimipaikka:</p>
        <input defaultValue={this.props.information.city} name="city" onChange={this.changeInfo} type="text"></input>
        </div>

        <div className="order-info-box">
        <p>Puhelinnumero:</p>
        <input defaultValue={this.props.information.phonenumber} name="phonenumber" onChange={this.changeInfo} type="text"></input>
        </div>

        <div className="order-info-box">
        <p>Sähköposti:</p>
        <input defaultValue={this.props.information.email} name="email" onChange={this.changeInfo} type="text"></input>
        </div>

        
    </div>

    <div id="text-area2">
        <h2>Jätä viesti:</h2>
        <div id="text-wrapper2">
        <textarea onChange={this.changeText} defaultValue={this.props.text}></textarea>
        </div>
        </div>

    <div id="order-continue-buttons">
       <Link style={{ textDecoration: 'none' }} to="/shoppingcart"><button>Takaisin</button></Link><Link style={{ textDecoration: 'none' }} to="/orderconfirmation"><button>Jatka</button></Link>
    </div>

    </div>

</div>

)


}

}


const mapStateToProps = (state) => {
    return {
        information: state.information,
        text: state.text
    }
}

function mapDispatchToProps (dispatch) {
  
    return {
      updateInformation: function (arg) {dispatch({
          type: "updateinformation",
          updatedinformation: arg
      })},

      updateText: function (arg) {dispatch({
          type: "updatetext",
          thetext: arg
      })}
      
    }
    
  }

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);


