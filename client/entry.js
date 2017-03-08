import 'regenerator-runtime/runtime'
import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import ReactDOM from 'react-dom'
import createSagaMiddleware from 'redux-saga'
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import RootReducer from './reducers'
import rootSaga from './actions'

const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()

const store = createStore(RootReducer, applyMiddleware(logger, sagaMiddleware))
sagaMiddleware.run(rootSaga)

const App = () => (
  <Provider store={store}>
    <div>Hello World</div>
  </Provider>
)

const NoMatch = () => (
  <div>Page Not Found</div>
)

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App} >
      <Route path='/*' component={NoMatch} />
    </Route >
  </Router >
, document.getElementById('app'))
