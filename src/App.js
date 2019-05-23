import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';

import Home from './pages/Home';
import About from './pages/About';

import Layout from './layouts/Layout';
import { Jumbotron } from './layouts/Jumbotron';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Jumbotron />
        <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
