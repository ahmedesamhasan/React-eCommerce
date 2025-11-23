import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { LangProvider } from '../src/pages/LangContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <LangProvider>
        <App />
      </LangProvider>
    </Provider>
  </React.StrictMode>,
);
