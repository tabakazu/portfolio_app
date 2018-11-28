import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import { Home, Login } from '../containers'
import { fetchLoginStateRequest, loginRequest } from '../actions/auth'

// Reducer
import { authReducer } from '../reducers'

// Saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  authReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

class App extends React.Component {
  componentWillMount() {
    store.dispatch(fetchLoginStateRequest())
  }

  render () {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute>
              <Route exact path="/" component={Home} />
            </PrivateRoute>
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App
