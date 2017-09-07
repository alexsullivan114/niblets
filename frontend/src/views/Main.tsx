import * as React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';

import {store} from '../redux/store';

import {ConnectedHomeView} from './Home';
import {ConnectedApiView} from './Api';

export class MainView extends React.Component<{}, {}> {
    render() {
        return (
        <Provider store={store}>
            <Router>
                <div className="container">
                    <Route exact path="/" component={ConnectedHomeView}/>
                    <Route path="/api" component={ConnectedApiView}/>
                </div>
            </Router>
        </Provider>
        );
    }
}