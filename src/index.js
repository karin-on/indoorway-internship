'use strict';
import './sass/main.scss';
import container from './js/_container';
import header from './js/_header';
import mainContent from './js/_main-content';
import stuffToBuy from './data/stuff-to-buy';
import { shopApp } from "./js/_app";

container();
header();
mainContent();
shopApp.init(stuffToBuy).addToCart().addToCart(1).updateCart();
