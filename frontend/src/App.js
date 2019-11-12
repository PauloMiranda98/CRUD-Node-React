import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Início</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/adicionar'} className="nav-link">Adicionar</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/listar'} className="nav-link">Listar</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
              <Route exact path='/adicionar' component={ Create } />
              <Route path='/editar/:codigo' component={ Edit } />
              <Route path='/listar' component={ Index } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
