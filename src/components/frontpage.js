
import React from 'react';
import './frontpage.css';
// this is a frontpage 1
import LogoFooter from './logofooter';
import SocialFooter from './socialfooter';

import { connect } from 'react-redux';

import {Link} from 'react-router-dom';


class FrontPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            status: "ready",
            buttonstyle: [{background: "var(--color3)"}, {background: "var(--color1)"}, {background: "var(--color1)"}, {background: "var(--color1)"}, {background: "var(--color1)"}]
                       
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

    images.scrollLeft = temp;

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


            images.scrollLeft = temp;
        
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

    

    var buttonStyles = [{background: "var(--color1)"}, {background: "var(--color1)"}, {background: "var(--color1)"}, {background: "var(--color1)"}, {background: "var(--color1)"}];
        
    
    if (arg === "+") {
        
        
        if (this.state.position === 1 || this.state.position === 2 || this.state.position === 3 || this.state.position === 4) {
            
            var newPos;
            
            if (this.state.position === 1) {newPos = 0 + imageWidth}
            if (this.state.position === 2) {newPos = imageWidth * 2}
            if (this.state.position === 3) {newPos = imageWidth * 3}
            if (this.state.position === 4) {newPos = imageWidth * 4}

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

      else if (this.state.position === 5) {

            var newPos2 = imageWidth * 5;

            var tempPos = 1;
            buttonStyles[tempPos-1] = {background: "var(--color3)"};

            this.scrollToDest(newPos2, () => {
                var images = document.getElementById("scroll-images");
                images.scrollLeft = 0;
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
            buttonStyles[4] = {background: "var(--color3)"};
            this.setState({
                status: "working",
                position: 5,
                buttonstyle: buttonStyles
            });
            images.scrollLeft = imageWidth*5;
            var newPos3 = images.scrollLeft - imageWidth;
            this.scrollToDest(newPos3, () => {
                this.setState({status: "ready"})
            })
        }

        if (this.state.position === 2 || this.state.position === 3 || this.state.position === 4 || this.state.position === 5) {

            var tempPosition = this.state.position - 1;
            buttonStyles[tempPosition-1] = {background: "var(--color3)"};

            this.setState({
                status: "working",
                position: tempPosition,
                buttonstyle: buttonStyles
            })

            var newPos4;
            
            if (this.state.position === 2) {newPos4 = 0}
            if (this.state.position === 3) {newPos4 = imageWidth}
            if (this.state.position === 4) {newPos4 = imageWidth*2}
            if (this.state.position === 5) {newPos4 = imageWidth*3}

            this.scrollToDest(newPos4, () => {
                this.setState({
                    status: "ready"
                })
            })

        }
   

    }


    else if (arg === 1 || arg === 2 || arg === 3 || arg === 4 || arg === 5) {
        
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


    if (this.state.status === "working") {return null}

    
    else if (arg === "right") {
        clearInterval(this.interval);
        this.scrollFunc("+");
    }

    else if (arg === "left") {
        clearInterval(this.interval);
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

startTouch = (e) => {
    
    this.start = e.touches[0].clientX;
    }

moveTouch = (e) => {

    if(this.state.status === "working") {return null}

    var temp = this.start - e.touches[0].clientX;
       
    if (temp < -90) {
        
        this.changeArrow("left")
        
    }

    else if (temp > 90) {
        this.changeArrow("right")
        
    }

    
}


autoScroll = () => {

    if (document.getElementById("scroll-images") === null) {
        return null;
    }

this.interval = setInterval(() => {
    
    if (this.state.status !== "working") {
        this.scrollFunc("+");
    }

}, 5000);


}



componentDidMount () {

this._mounted = true;

window.scrollTo(0, 0);




/*------------- Opacity and start of the autoscroll ----------------------*/



var catPics = document.getElementsByClassName("frontpage-pic");

var images = document.getElementsByClassName("img-commercial");

var logoPics = document.getElementsByClassName("logofooter-pic");


var count = 0;

var finalCount = catPics.length + images.length + logoPics.length;


var startScroll = ()  => {

if (count === finalCount) {
    this.autoScroll();
    
}

}



var opacity = (k) => {


        catPics[k].addEventListener("load", () => {
            
            if (this._mounted === true) {
                
            catPics[k].style = "transition: opacity 1.5s, filter 0.2s; opacity: 1"; 

            count = count + 1;
            startScroll();
        }

        })
 
}

for (var k = 0; k < catPics.length; k ++) {
    opacity(k);
}



var opacity2 = (s) => {
    
     

        images[s].addEventListener("load", () => {

            if (this._mounted === true) {
                
            images[s].style = "transition: opacity 1.5s; opacity: 1";
            count = count + 1;
            startScroll();
            
            }

        })
        


}

for (var s = 0; s < images.length; s ++) {
    opacity2(s);
    
}


var logoPicFunc = (i) => {
    
    logoPics[i].addEventListener("load", function () {
        count = count + 1;
        startScroll();
    })

}

for (var i = 0; i < logoPics.length; i++) {

    logoPicFunc(i);

}


}



componentWillUnmount (){
   this._mounted = false;
   clearInterval(this.interval);
}



render () {

    
   
    var subCats = [];

    subCats = [this.props.products.categories[0].subcategories, this.props.products.categories[1].subcategories, this.props.products.categories[2].subcategories, this.props.products.categories[3].subcategories];
    
    
    
    var path1 = "/sub-category?category=0&subcategory=";
    
    var t1 = subCats[0].map(function (x){
        return (
            <Link className="tile-wrap" key={x.name} to={path1 + x.id} >
            <div className="frontpage-tile">
            <div className="frontpage-tile-empty"></div>
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
            <div className="frontpage-tile-empty"></div>
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
            <div className="frontpage-tile-empty"></div>
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
            <div className="frontpage-tile-empty"></div>
                <img className="frontpage-pic" alt="Subcategory" src={x.pic}></img>
                <p className="frontpage-catname">{x.name}</p>
            </div>
            </Link>
        );
    })
    
    var tiles = [...t1, ...t2, ...t3, ...t4];


return (
    
<div id="frontpage-wrap">
    
    <div id="frontpage-container-wrap">

    <div id="scroll-img-container">
    
    

    <div id="arrow-buttons-wrap">
    <button onClick={() => this.changeArrow("left")} id="left-button" className="commercial-button">&#10094;</button>
    <button onClick={() => this.changeArrow("right")} id="right-button" className="commercial-button">&#10095;</button>
    </div>

    <div id="round-buttons-wrap">
    <button style={this.state.buttonstyle[0]} onClick={this.changePic} id="button-picture1" value="1" className="roundbutton"></button>
    <button style={this.state.buttonstyle[1]} onClick={this.changePic} id="button-picture2" value="2" className="roundbutton"></button>
    <button style={this.state.buttonstyle[2]} onClick={this.changePic} id="button-picture3" value="3" className="roundbutton"></button>
    <button style={this.state.buttonstyle[3]} onClick={this.changePic} id="button-picture4" value="4" className="roundbutton"></button>
    <button style={this.state.buttonstyle[4]} onClick={this.changePic} id="button-picture5" value="5" className="roundbutton"></button>
    </div>

    <div id="scroll-img-container-empty"></div>

    <div onTouchMove={this.moveTouch} onTouchStart={this.startTouch} id="scroll-images">

    <Link key="im1" to="/sub-category?category=3&subcategory=kendama"><img id="image1" className="img-commercial" alt="commercial" src='/frontpagepics/c1.jpg'></img></Link>
    <Link key="im2" to="/sub-category?category=3&subcategory=media"><img className="img-commercial" alt="commercial" src='/frontpagepics/c2.jpg'></img></Link>
    <Link key="im3" to="/sub-category?category=2&subcategory=yksipyoraiset"><img className="img-commercial" alt="commercial" src='/frontpagepics/c3.jpg'></img></Link>
    <Link key="im4" to="/sub-category?category=1&subcategory=kankaat"><img className="img-commercial" alt="commercial" src='/frontpagepics/c4.jpg'></img></Link>
    <Link key="im5" to="/sub-category?category=2&subcategory=slackline"><img className="img-commercial" alt="commercial" src='/frontpagepics/c5.jpg'></img></Link>
    <Link key="im6" to="/sub-category?category=3&subcategory=kendama"><img className="img-commercial" alt="commercial" src='/frontpagepics/c1.jpg'></img></Link>
    
    </div>
    
    </div>




    <div id="frontpage-tiles">

    {tiles}

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