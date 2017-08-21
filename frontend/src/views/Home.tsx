import * as React from 'react';
import * as Immutable from 'immutable';
import {connect} from 'react-redux';

import {store, StoreState} from '../redux/store';
import {Post as PostModel} from '../models/Post';

import {Post} from './components/Post';

interface HomeViewProps {
    companyName: string;
    posts: Immutable.List<PostModel>;
}

export class HomeView extends React.Component<HomeViewProps, {}> {
    render() {
        return (
        <div>
            <h3>{this.props.companyName}</h3>
            { this.props.posts.map(post => {
                return (
                <Post
                    key={post.title}
                    post={post}
                />
                );
            }) }
        </div>
        );
    }
}

export const ConnectedHomeView = connect((state: StoreState) => {
    return {
        companyName: state.companyName,
        posts: state.posts
    };
})(HomeView);