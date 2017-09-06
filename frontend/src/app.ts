import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {MainView as MainViewComponent} from './views/Main';

const Main = React.createFactory(MainViewComponent);

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(Main(), document.querySelector('#root'));
});