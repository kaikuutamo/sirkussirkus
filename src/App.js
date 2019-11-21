import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar'
import FrontPage from './components/frontpage';
import Categories from './components/categories';
import Category from './components/category';
import SubCategory from './components/subcategory';
import Product from './components/product';
import ShoppingCart from './components/shoppingcart';
import OrderPage from './components/orderpage';
import OrderConfirmation from './components/orderconfirmation';
import OrderStatus from './components/orderstatus';
import Sponsors from './components/sponsors';
import TheShop from './components/theshop';


class App extends Component {


  render()
  
  {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar />
      <Route exact path='/' component={FrontPage}/>
      <Route path='/categories' component={Categories}/>
      <Route path='/category' component={Category}/>
      <Route path='/sub-category' component={SubCategory}/>
      <Route path='/product' component={Product}/>
      <Route path='/shoppingcart' component={ShoppingCart} />
      <Route path='/orderpage' component={OrderPage} />
      <Route path='/orderconfirmation' component={OrderConfirmation} />
      <Route path='/orderstatus' component={OrderStatus} />
      <Route path='/sponsors' component={Sponsors} />
      <Route path='/putiikki' component={TheShop} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;


// 