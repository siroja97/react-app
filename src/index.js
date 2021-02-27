import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from "react-router-dom";
import App from './components/app';
import ErrorBoundary from "./components/error-boundary";
import {CarStoreService} from './services/carStore-service'
import {CarStoreServiceProvider} from "./components/car-store-service-context";
import store from "./store";
import './index.css'

ReactDOM.render(
  <Provider store={store}>
      <ErrorBoundary>
          <CarStoreServiceProvider value={CarStoreService}>
              <Router>
                  <App/>
              </Router>
          </CarStoreServiceProvider>
      </ErrorBoundary>
  </Provider>,document.getElementById('root')
);
