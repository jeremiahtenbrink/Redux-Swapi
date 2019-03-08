import axios from "axios";

export const FETCHING_DATA = "FETCHING_DATA";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

const url = "https://swapi.co/api/people/";

// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const fetchData = () => dispatch => {
    debugger;
    dispatch( fetchingData() );
    
    const request = axios.get( url )
        .then( ( { data } ) => {
            dispatch( success( data ) );
        } )
        .catch( err => {
            dispatch( failure( err ) );
        } );
};

const success = data => {
    return {
        type: SUCCESS,
        payload: data
    };
};

const failure = err => {
    return {
        type: FAILURE,
        payload: err
    };
};

const fetchingData = () => {
    return {
        type: FETCHING_DATA
    };
};
