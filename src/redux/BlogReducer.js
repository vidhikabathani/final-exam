import { ADD_POST, DELETE_POST, GET_POST } from './ActionType';

const initial = {
    post: []
}

export const BlogReducer = (state = initial, { type, payload }) => {
    switch (type) {
        case ADD_POST:
            return {
                ...state,
                post: [...state.post, payload]
            }

        case GET_POST:
            return {
                ...state,
                post: payload
            }
        
        case DELETE_POST:
                return {
                    ...state,
                    post: state.post.filter((e) => e.id !== payload),
                };

        default:
            return state
    }
}