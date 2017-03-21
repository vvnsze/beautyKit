import 'regenerator-runtime/runtime'
import React from 'react'
// import { applyMiddleware, createStore } from 'redux'
import ReactDOM from 'react-dom'
// import createSagaMiddleware from 'redux-saga'
import { Router, Route, hashHistory } from 'react-router'
// import { Provider } from 'react-redux'
// import createLogger from 'redux-logger'
// import RootReducer from './reducers'
// import rootSaga from './actions'
import createUserForm from './components/user'

// const logger = createLogger()
// const sagaMiddleware = createSagaMiddleware()
//
// const store = createStore(RootReducer, applyMiddleware(logger, sagaMiddleware))
// sagaMiddleware.run(rootSaga)
//
class App extends React.Component {
  component_will_mount() {
    this.setState({})
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

// const App = () => (
//   <Provider store={store}>
//     <div>Hello World</div>
//     <createUserForm />
//   </Provider>
// )

const NoMatch = () => (
  <div>Page Not Found</div>
)

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App} >
      <Route path='/signup' component={createUserForm} />
      <Route path='/*' component={NoMatch} />
    </Route >
  </Router >
, document.getElementById('app'))
