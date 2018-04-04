window.$ = window.jQuery = require('jquery');

import AOS from 'aos';

import './components/main-header/main-header';
import './components/join/join__modal/join__modal';
import './components/faq/faq';


AOS.init({
  disable: 'mobile'
});
