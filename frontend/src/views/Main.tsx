import * as React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';

import {store} from '../redux/store';

import {ConnectedHomeView} from './Home';

export class MainView extends React.Component<{}, {}> {
    render() {
        return (
        <div className="container">
            <Provider store={store}>
                <Router>
                    <Route exact path="" component={ConnectedHomeView}/>
                </Router>
            </Provider>
        </div>
        );
    }
}