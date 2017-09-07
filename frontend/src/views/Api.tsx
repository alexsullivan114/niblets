import * as React from 'react';
import * as Immutable from 'immutable';
import {connect} from 'react-redux';

import {store, StoreState} from '../redux/store';
import {ApiServer, RossStuffItem} from '../services/api';


interface ApiViewProps {
    companyName: string;
}

interface ApiViewState {
    rossStuff: RossStuffItem[];
}

export class ApiView extends React.Component<ApiViewProps, ApiViewState> {
    constructor(props) {
        super(props);
        this.state = {
            rossStuff: []
        };
    }

    componentWillMount() {
        ApiServer.getRossStuff().then(rossStuff => {
            if (!rossStuff) {
                return;
            }
            console.log(rossStuff);
            this.setState({
                rossStuff
            })
        });
    }

    render() {
        return (
        <div>
            <h3>{this.props.companyName}</h3>
            <p>api test here:</p>
            <ul>
                {this.state.rossStuff.map(item =>
                    <li key={item.message}>{item.message}</li>
                )}
            </ul>
        </div>
        );
    }
}

export const ConnectedApiView = connect((state: StoreState) => {
    return {
        companyName: state.companyName
    };
})(ApiView);