import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import history from './history'
import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import categoriesReducer from './redux/reducers/categories/categories';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  categories: categoriesReducer
})

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)



ReactDOM.render(
  <div>
    <Provider store={store}>
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>
    </Provider>
  </div>,
  document.getElementById('root')
);
