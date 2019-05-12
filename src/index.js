'use strict';
import './sass/main.scss';
import container from './js/_container';
import header from './js/_header';
import mainContent from './js/_main-content';
import products from './js/_products';
import cart from './js/_cart';
import stuffToBuy from './data/stuff-to-buy';
import { shopApp } from "./js/_app";

container();
header();
mainContent();
products();
cart();
shopApp.init(stuffToBuy).addToCart().addToCart(1).updateCart();
