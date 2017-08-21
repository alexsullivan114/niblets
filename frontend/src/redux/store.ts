import * as _ from 'lodash';
import * as Immutable from 'immutable';
import {createStore} from 'redux';

import {Post} from '../models/Post';

type ReducerAction = any;

export interface StoreState {
    companyName: string;
    posts: Immutable.List<Post>;
}

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices sapien ipsum, sed gravida risus ultrices in. Duis consectetur aliquam dolor a tristique. Praesent et cursus diam, quis consectetur nisl. Nam ac euismod lectus. Quisque suscipit ultrices ante, a aliquam est pellentesque ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec tincidunt blandit convallis. Phasellus quis mi vel erat aliquet imperdiet sit amet sit amet quam. Ut in congue quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas tristique tincidunt semper. Cras ligula risus, viverra sit amet eros eu, vehicula venenatis neque. Sed lorem eros, lobortis non diam eget, luctus tincidunt neque. Maecenas id enim facilisis, mattis odio quis, euismod diam. Quisque viverra nibh non dignissim dignissim. Aliquam erat volutpat.';

const initialState: StoreState = {
    companyName: 'Niblets',
    posts: Immutable.List([
        {
            title: 'Post One',
            author: 'Chet Manly',
            text: loremIpsum
        },
        {
            title: 'Extremely Important Post',
            author: 'Dimen Shuh',
            text: loremIpsum
        },
        {
            title: 'Not Post Three',
            author: 'Dimen Shuh',
            text: loremIpsum
        }
    ])
};

function mainReducer(
    previousState = initialState,
    action: ReducerAction
) {
    const newState = _.extend({}, previousState);

    switch (action.type) {

    }

    return newState;
}

export const store = createStore<StoreState>(mainReducer);