
import React from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
import './categories.css'

import LogoFooter from './logofooter';
import SocialFooter from './socialfooter';


class Categories extends React.Component {


scrollTo = () => {
    
        window.scrollTo(0, 0);
    
}

componentDidUpdate () {
   this.scrollTo();
}

componentWillUnmount (){
    this._mounted = false;
    
 }

componentDidMount () {

    this._mounted = true;

    this.scrollTo();


    var catPics = document.getElementsByClassName("category-tile-img");

    var jes = (k) => {

        
            catPics[k].addEventListener("load", () => {

                if (this._mounted === true) {
                
                catPics[k].style = "transition: opacity 1.5s, filter 0.2s; opacity: 1";

            }

            })

        }

    

    for (var k = 0; k < catPics.length; k ++) {
        jes(k);
    }

}

render() {

    const category1 = this.props.products.categories[0].subcategories.slice();
    
    const categoryTiles1 = category1.map(function (x){
        var temp1 = "/sub-category?category=0&subcategory=" + x.id;  
        
        return (
            <Link className="tile-wrap" key={x.name} to={temp1}>
            <div className="category-tile">
            <div className="category-tile-empty"></div>
            <img className="category-tile-img" alt={x.name} src={x.pic}></img>
            <p>{x.name}</p>
            </div>
            </Link>
        )
    })

    const category2 = this.props.products.categories[1].subcategories.slice();
    
    const categoryTiles2 = category2.map(function (x){
    var temp2 = "/sub-category?category=1&subcategory=" + x.id;   
        return (
            <Link className="tile-wrap" key={x.name} to={temp2}>
            <div className="category-tile">
            <div className="category-tile-empty"></div>
            <img className="category-tile-img" alt={x.name} src={x.pic}></img>
            <p>{x.name}</p>
            </div>
            </Link>
        )
    })

    const category3 = this.props.products.categories[2].subcategories.slice();
    
    const categoryTiles3 = category3.map(function (x){
        var temp3 = "/sub-category?category=2&subcategory=" + x.id;    
        return (
            <Link className="tile-wrap" key={x.name} to={temp3}>
            <div className="category-tile">
            <div className="category-tile-empty"></div>
            <img className="category-tile-img" alt={x.name} src={x.pic}></img>
            <p>{x.name}</p>
            </div>
            </Link>
        )
    })

    const category4 = this.props.products.categories[3].subcategories.slice();
    
    const categoryTiles4 = category4.map(function (x){
        var temp4 = "/sub-category?category=3&subcategory=" + x.id;    
        return (
            <Link className="tile-wrap" key={x.name} to={temp4}>
            <div className="category-tile">
            <div className="category-tile-empty"></div>
            <img className="category-tile-img" alt={x.name} src={x.pic}></img>
            <p>{x.name}</p>
            </div>
            </Link>
        )
    })



return (

    <div id="categories-page-wrapper">

    <div id="categories-main-wrapper">

    <div id="categories-texts">
        <h1>Sirkusvälineet</h1>
        <p>Tältä sivulta näet kaikki pääkategoriat ja niiden alakategoriat.</p>
    </div>

    <div id="categories-wrapper1">

        <div className="categories-line-top"></div>
        <h2 id="jongleeraus">Jongleeraus</h2>
        <div className="categories-line-top2"></div>

        <div className="categories-tiles">
        {categoryTiles1}
        </div>

        <div className="categories-line"></div>
        <h2 id="ilma-akrobatia">Ilma-akrobatia</h2>
        <div className="categories-line-top2"></div>

        <div className="categories-tiles">
        {categoryTiles2}
        </div>

        <div className="categories-line"></div>
        <h2 id="tasapainoilu">Tasapainoilu</h2>
        <div className="categories-line-top2"></div>

        <div className="categories-tiles">
        {categoryTiles3}
        </div>

        <div className="categories-line"></div>
        <h2 id="muut">Muut</h2>
        <div className="categories-line-top2"></div>

        <div className="categories-tiles">
        {categoryTiles4}
        </div>

        <div className="categories-line"></div>

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

export default connect(mapStateToProps)(Categories);