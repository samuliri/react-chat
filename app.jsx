import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ChatContainer from './containers/chat_container';
import store from './store/store';
// TODO import "./stylesheets/main.scss";

const main = (
  <Provider store={store}>
    <ChatContainer />
  </Provider>
);

ReactDOM.render(main, document.getElementById('container'));
