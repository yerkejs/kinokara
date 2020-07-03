// Main Container of whole application


import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

// MARK: Store of application
import reducers from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux';

// MARK: Pages of application
import Home from './Pages/Home/Home'
import Recommendations from './Pages/Recommendations/Recommendations'

const store = createStore(reducers)


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Recommendations}/>
            <Route exact path="/list" component={Home}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
