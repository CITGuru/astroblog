import axios from "axios";
import { POSTS_LOADING, POST_LOADING } from ".";
var qs = require('qs');


axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export const setPostsLoading = () => {
    return {
        type: POSTS_LOADING
    }
}

export const setPostLoading = () => {
    return {
        type: POST_LOADING
    }
}