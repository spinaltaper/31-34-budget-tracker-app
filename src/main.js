import React from 'react';
import { render as reactDomRender } from 'react-dom';
import App from './__component/app/app';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 

import App from './component/app/app';
import reducer from './reducer/main';

import './styles/main.scss';

const middleware = {};
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

const container = document.createElement('div');
document.body.appendChild(container);

reactDomRender(<App />, container);