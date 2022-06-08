import React from 'react';
import {Route} from 'react-router';
import {Layout} from './components/Layout';
import './custom.css'
import PersonForm from "./components/PersonForm";

const App = () => {
    return (
        <Layout>
            <Route path='/' component={PersonForm}/>
        </Layout>
    );
}
export default App;