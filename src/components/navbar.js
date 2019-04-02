
import React from "react";
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

import './navbar.css';
import logo from './pictures/logo3.png';

import cartlogo from './pictures/shopping-cart.png';

import hamburger from './pictures/hamburger.png';

class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cartNum: 0,
            dropdown: "up",
            status: "ready"
        }

    }


dropDown = (arg) => {

if (this.state.status === "working") {return null}

this.setState({
    status: "working"
})

var dropD = document.getElementById("dropdown-wrapper");
var list = document.getElementById("mobile-list");
var bg = document.getElementById("dropdown-wrapper-bg-img");

if (this.state.dropdown === "up") {

dropD.style.display = "block";
var height = dropD.clientHeight;

dropD.style.height = 0 + "px";
dropD.style.visibility = "visible";

var h = 0;

var scroll = () => {
    h = h + 12;
    dropD.style.height = h + "px"

    if (h < height) {
        requestAnimationFrame(scroll);
        }

    if (h >= height) {
        list.style.visibility = "visible";
        bg.style.opacity = "1";
        this.setState({
            status: "ready",
            dropdown: "down"
        })
    } 

}

scroll();

}

else {
    list.style.visibility = "hidden";

    bg.style.opacity = "0";

    var normalHeight = dropD.clientHeight;
    var height2 = dropD.clientHeight;

    var scroll2 = () => {

        height2 = height2 - 12;
        dropD.style.height = height2 + "px";

        if (height2 > 0) {
            requestAnimationFrame(scroll2);
        }

        if (height2 <= 0) {
            dropD.style.visibility = "hidden";
            dropD.style.height = normalHeight + "px";
            dropD.style.display = "none";
            this.setState({
                status: "ready",
                dropdown: "up"
            })
        }

    }

    scroll2();

}


}


calcQuantity = (arg) => {

var quantity = 0;
    
for (var k in arg) {
    quantity = quantity + arg[k].quantity;
}

return quantity;

}


componentDidUpdate () {
    
    var newQ = this.calcQuantity(this.props.shoppingCart);
    var oldQ = this.state.cartNum;

    if (newQ !== oldQ) {
        this.setState({
            cartNum: newQ
        })
    }

}


componentDidMount () {

    var cartNumber = this.props.shoppingCart;
    cartNumber = this.calcQuantity(cartNumber);
    
    this.setState({
        cartNum: cartNumber
    })


}


render () {



return (

<div>

<div id="nav-wrapper">

            <nav>

            <div id="logo-bar">
                <Link to="/"><img id="logo" alt="Sirkussirkus logo" src={logo}></img></Link>
            </div>

            <div id="firstnav-wrapper">
            <div id="firstnav-wrapper2">
            <Link id="cartlogo-wrapper" to="/shoppingcart"><div id="cartlogo-wrapper2"><img alt="Cart logo" src={cartlogo}></img><p>{this.state.cartNum}</p></div></Link>
           <div id="navbar">
           <ul>
                <li><Link to="/">TARJOUKSET</Link></li>
                <li><Link to="/putiikki">PUTIIKKI</Link></li>
                <li><Link to="/sponsors">SPONSOROINTI</Link></li>
                <li><Link to="/categories">SIRKUSVÄLINEET</Link></li>
            </ul>
            
           </div>
           </div>
           
           
           </div>
           

           <div id="navbar2">
           <ul>
                <li><Link to="/categories/?jongleeraus">Jongleeraus</Link></li>
                <li><Link to="/categories/?ilmaakro">Ilma-akrobatia</Link></li>
                <li><Link to="/categories/?tasapainoilu">Tasapainoilu</Link></li>
                <li><Link to="/categories/?muut">Muut</Link></li>
            </ul>

           </div>
                   
            </nav>
            


</div>



<div id="nav-wrapper-mobile">

    <nav id="navbar-mobile">

    <div id="mobilelogo">
    <Link to="/"><img alt="Sirkussirkus logo" src={logo}></img></Link>
    </div>

    <div id="mobilecart">
    <Link id="cartlogo-mobile" to="/shoppingcart"><div id="cartlogo-mobile2"><img alt="Cart logo" src={cartlogo}></img><p>{this.state.cartNum}</p></div></Link> 
    </div>

    <div id="mobile-hamburger">
        <div id="mobile-hamb-wrap"><button onClick={this.dropDown}><img alt="Dropdown menu" src={hamburger}></img></button></div>
    </div>

    </nav>


    <div id="dropdown-wrapper">

    

        <nav>
        <ul id="mobile-list">

                <li onClick={this.dropDown}><Link to="/">TARJOUKSET</Link></li>
                <li onClick={this.dropDown}><Link to="/putiikki">PUTIIKKI</Link></li>
                <li onClick={this.dropDown}><Link to="/sponsors">SPONSOROINTI</Link></li>
                <li onClick={this.dropDown}><Link to="/categories">SIRKUSVÄLINEET</Link></li>
                <li onClick={this.dropDown}><Link to="/categories/?jongleeraus">Jongleeraus</Link></li>
                <li onClick={this.dropDown}><Link to="/categories/?ilmaakro">Ilma-akrobatia</Link></li>
                <li onClick={this.dropDown}><Link to="/categories/?tasapainoilu">Tasapainoilu</Link></li>
                <li onClick={this.dropDown}><Link to="/categories/?muut">Muut</Link></li>

        </ul>
        </nav>

        <div id="dropdown-wrapper-bg"><img id="dropdown-wrapper-bg-img" alt="bg" src="./frontpagepics/banner5.jpg"></img></div>  

    </div>

</div>




<div id="emptyspace-mobile"></div>


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

export default connect(mapStateToProps)(Navbar);