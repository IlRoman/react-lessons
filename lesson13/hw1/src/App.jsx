import React from 'react';
import Home from './Home';
import Users from './Users';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const App = () => {
    return (
        <div className="page">
            <BrowserRouter>
                <ul className="navigation">
                    <li className="navigation__item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;