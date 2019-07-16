import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { AuthStore } from './contexts/AuthStore';
import { SearchStore } from './contexts/SearchStore';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './components/App';
require('dotenv').config()

ReactDOM.render(
  <AuthStore>
    <SearchStore>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SearchStore>
  </AuthStore>
  , document.getElementById('root'));
