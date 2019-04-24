import * as actions from "../Actions"
import uuid from 'uuid';

const initialState = {
    posts: [{
        title: "New article",
        id: uuid(),
        content: "This is a new blog"
    }],
    post: {},
    postsLoading:false,
    postLoading:false,
}

export default (state = initialState, action) => {
    switch(action.type){
        case actions.POSTS_LOADING:
            return {
            ...state,
            postsLoading: true
            }
        default:
            return state;
    }
}