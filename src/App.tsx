import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Home from './Home/Home';
import MovieDetail from './MovieDetail/MovieDetail';


const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/detail/:movieId">
                <MovieDetail />
            </Route>
            <Redirect to="/" />
        </Switch>
    </Router>
);

export default App;