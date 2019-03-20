
import React from 'react';
import './frontpage.css';

import LogoFooter from './logofooter';
import SocialFooter from './socialfooter';

import { connect } from 'react-redux';

import {Link} from 'react-router-dom';

import commercial1 from './frontpagepics/c1.jpg';
import commercial2 from './frontpagepics/c2.jpg';
import commercial3 from './frontpagepics/c3.jpg';



class FrontPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            slideshow: [],
            position: 1,
            status: "ready",
            tiles: [],
            buttonstyle: [{background: "var(--color3)"}, {background: "var(--color1)"}, {background: "var(--color1)"}]
                        
        }

    }


scrollToDest = (arg, callback) => {

    var images = document.getElementById("scroll-images");
    
    var temp = document.getElementById("scroll-images").scrollLeft;

 
    if (arg > temp) {

    var justScroll = () => {

    if (temp === arg - 30 || temp > arg - 30) {
        temp = temp + 1;
    }

    else {temp = temp + 30}

    images.scrollTo(temp, 0);
    
        if (temp < arg) {
            requestAnimationFrame(justScroll);
        }

        if (temp >= arg && this._mounted === true) {callback()}

    }

    justScroll();

}

    if (arg < temp) {
        
        var justScroll2 = () => {

            if (temp === arg + 30 || temp < arg + 30) {
                temp = temp -1;
            }

            else {temp = temp - 30}


            images.scrollTo(temp, 0);
        
            if (arg < temp) {
                requestAnimationFrame(justScroll2);
            }
            
            if (arg >= temp) {callback()}

            }
        
            justScroll2();

    }

}


scrollFunc = (arg) => {

    var images = document.getElementById("scroll-images");
    
    var imageWidth = document.getElementById("image1").clientWidth;

    

    var buttonStyles = [{background: "var(--color1)"}, {background: "var(--color1)"}, {background: "var(--color1)"}];
        
    
    if (arg === "+") {
        
        
        if (this.state.position === 1 || this.state.position === 2) {
            
            var newPos = images.scrollLeft + imageWidth;

            var temp = this.state.position + 1;
            buttonStyles[temp-1] = {background: "var(--color3)"};

            this.scrollToDest(newPos, () => {
                this.setState({
                    status: "ready"
                })
               
            });
            this.setState({
                status: "working",
                position: temp,
                buttonstyle: buttonStyles
                
            })
        }

      else if (this.state.position === 3) {

            var newPos2 = images.scrollLeft + imageWidth;

            var tempPos = 1;
            buttonStyles[tempPos-1] = {background: "var(--color3)"};

            this.scrollToDest(newPos2, () => {
                var images = document.getElementById("scroll-images");
                images.scrollTo(0, 0);
                this.setState({
                    status: "ready"
                })
            });

            this.setState({
                status: "working",
                position: tempPos,
                buttonstyle: buttonStyles
            })

        }

    
    }


    else if (arg === "-") {

        if (this.state.position === 1) {
            buttonStyles[2] = {background: "var(--color3)"};
            this.setState({
                status: "working",
                position: 3,
                buttonstyle: buttonStyles
            });
            images.scrollTo({left: imageWidth*3, behavior: 'instant'});
            var newPos3 = images.scrollLeft - imageWidth;
            this.scrollToDest(newPos3, () => {
                this.setState({status: "ready"})
            })
        }

        if (this.state.position === 2 || this.state.position === 3) {

            var tempPosition = this.state.position - 1;
            buttonStyles[tempPosition-1] = {background: "var(--color3)"};

            this.setState({
                status: "working",
                position: tempPosition,
                buttonstyle: buttonStyles
            })

            var newPos4 = images.scrollLeft - imageWidth;

            this.scrollToDest(newPos4, () => {
                this.setState({
                    status: "ready"
                })
            })

        }

        

    }


    else if (arg === 1 || arg === 2 || arg === 3) {
        
        var positionNumber = parseInt(arg);
        
        buttonStyles[positionNumber-1] = {background: "var(--color3)"};

        this.setState({
            status: "working",
            position: positionNumber,
            buttonstyle: buttonStyles
        })

        var newPos5 = imageWidth * (positionNumber - 1);

        this.scrollToDest(newPos5, () => {
            this.setState({
                status: "ready"
            })
        })

    }


}

changeArrow = (arg) => {

    clearInterval(this.interval)

    if (this.state.status === "working") {return null}

    
    else if (arg.target.id === "right-button") {
        this.scrollFunc("+");
    }

    else if (arg.target.id === "left-button") {
        this.scrollFunc("-");
    }

    this.autoScroll();

}


changePic = (arg) => {
        
    clearInterval(this.interval)

    if (this.state.status === "working") {return null};

    var argTemp = parseInt(arg.target.value);

    if (argTemp === this.state.position) {return null};

    this.scrollFunc(argTemp);

    this.autoScroll();

}



autoScroll = () => {

    if (document.getElementById("scroll-images") === null) {
        return null;
 }

this.interval = setInterval(() => {
    
    if (this.state.status !== "working") {
        this.scrollFunc("+");
    }

}, 4500);


}



componentDidMount () {

window.scrollTo(0, 0);

var slide1 = (<Link key="im1" to="/product?category=0&subcategory=pallot&id=kuutamo75"><img id="image1" className="img-commercial" alt="commercial" src={commercial1}></img></Link>);
var slide2 = (<Link key="im2" to="/product?category=0&subcategory=pallot&id=kuutamo75"><img key="im2" className="img-commercial" alt="commercial" src={commercial2}></img></Link>);
var slide3 = (<Link key="im3" to="/product?category=0&subcategory=pallot&id=kuutamo75"><img key="im3" className="img-commercial" alt="commercial" src={commercial3}></img></Link>);
var endSlide = (<Link key="im4" to="/product?category=0&subcategory=pallot&id=kuutamo75"><img key="im4" className="img-commercial" alt="commercial" src={commercial1}></img></Link>);

var slides = [slide1, slide2, slide3, endSlide];

this.setState({
    slideshow: slides
})


var subCats = [];

subCats = [this.props.products.categories[0].subcategories, this.props.products.categories[1].subcategories, this.props.products.categories[2].subcategories, this.props.products.categories[3].subcategories];



var path1 = "/sub-category?category=0&subcategory=";

var t1 = subCats[0].map(function (x){
    return (
        <Link className="tile-wrap" key={x.name} to={path1 + x.id} >
        <div className="frontpage-tile">
            <img className="frontpage-pic" alt="Subcategory" src={x.pic}></img>
            <p className="frontpage-catname">{x.name}</p>
        </div>
        </Link>
    );
})

var path2 = "/sub-category?category=1&subcategory=";

var t2 = subCats[1].map(function (x){
    return (
        <Link className="tile-wrap" key={x.name} to={path2 + x.id} >
        <div className="frontpage-tile">
            <img className="frontpage-pic" alt="Subcategory" src={x.pic}></img>
            <p className="frontpage-catname">{x.name}</p>
        </div>
        </Link>
    );
})

var path3 = "/sub-category?category=2&subcategory=";

var t3 = subCats[2].map(function (x){
    return (
        <Link className="tile-wrap" key={x.name} to={path3 + x.id} >
        <div className="frontpage-tile">
            <img className="frontpage-pic" alt="Subcategory" src={x.pic}></img>
            <p className="frontpage-catname">{x.name}</p>
        </div>
        </Link>
    );
})

var path4 = "/sub-category?category=3&subcategory=";

var t4 = subCats[3].map(function (x){
    return (
        <Link className="tile-wrap" key={x.name} to={path4 + x.id} >
        <div className="frontpage-tile">
            <img className="frontpage-pic" alt="Subcategory" src={x.pic}></img>
            <p className="frontpage-catname">{x.name}</p>
        </div>
        </Link>
    );
})

var tiles = [...t1, ...t2, ...t3, ...t4];

this.setState({
    tiles: tiles
})


this.autoScroll();

this._mounted = true;


}

componentWillUnmount (){
   this._mounted = false;
   clearInterval(this.interval);
}



render () {



return (
    
<div id="frontpage-wrap">
    
    <div id="frontpage-container-wrap">

    <div id="scroll-img-container">
    
    <div id="arrow-buttons-wrap">
    <button onClick={this.changeArrow} id="left-button" className="commercial-button">&#10094;</button>
    <button onClick={this.changeArrow} id="right-button" className="commercial-button">&#10095;</button>
    </div>

    <div id="round-buttons-wrap">
    <button style={this.state.buttonstyle[0]} onClick={this.changePic} id="button-picture1" value="1" className="roundbutton"></button>
    <button style={this.state.buttonstyle[1]} onClick={this.changePic} id="button-picture2" value="2" className="roundbutton"></button>
    <button style={this.state.buttonstyle[2]} onClick={this.changePic} id="button-picture3" value="3" className="roundbutton"></button>
    </div>

    <div id="scroll-images">

    {this.state.slideshow}

    </div>
    
    </div>




    <div id="frontpage-tiles">

    {this.state.tiles}

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

export default connect(mapStateToProps)(FrontPage);