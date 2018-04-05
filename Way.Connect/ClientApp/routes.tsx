import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './_shared/Layout';
import { Login } from './Login/Login';



import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';


export const routes = <Layout>
    <Route exact path='/Login' component={Login} />
    {/*
    <Route path='/counter' component={ Counter } />
    <Route path='/fetchdata' component={ FetchData } />
    */}
</Layout>;
