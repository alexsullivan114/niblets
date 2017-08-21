import * as React from 'react';

import {Post as PostModel} from '../../models/Post';

interface PostProps {
    post: PostModel;
}

export class Post extends React.Component<PostProps, {}> {
    render() {
        return (
        <div className="post">
            <div className="post-header">
                <span className="post-title">{this.props.post.title}</span>
                <span className="post-author">by {this.props.post.author}</span>
            </div>
            <p className="post-text">{this.props.post.text}</p>
        </div>
        );
    }
}