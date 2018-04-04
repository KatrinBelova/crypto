const $ = window.$ = window.jQuery = require('jquery');

import AOS from 'aos';


AOS.init({
  disable: 'mobile'
});

import './components/main-header/main-header';
import './components/popup/popup';
import './components/faq/faq';


