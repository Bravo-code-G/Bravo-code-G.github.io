import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../containers/Home.jsx';
import Layout from '../components/Layout.jsx';
import NotFound from '../containers/NotFound.jsx';
import Maquinas from '../components/Maquinas.jsx';
import User from '../components/User.jsx';
import Especial from '../components/Especial.jsx';
import '../assets/styles/App.scss';

const App = () => (
    <BrowserRouter>
    <Layout>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Maquinas' component={Maquinas} />
            <Route exact path='/User' component={User} />
            <Route exact path='/Especial' component={Especial} />
            <Route component={NotFound} />
        </Switch>
    </Layout>
    </BrowserRouter>
);

export default App;
