import { FETCHING_DATA, FAILURE, SUCCESS } from "../actions";

const initialState = {
    characters: [],
    fetching: false,
    error: null,
};
export const charsReducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case FETCHING_DATA:
            return { ...state, fetching: true };
        case SUCCESS:
            return { characters: action.payload.results, fetching: false, error: null };
        case FAILURE:
            return { ...state, fetching: false, error: action.payload };
        default:
            return state;
    }
};
