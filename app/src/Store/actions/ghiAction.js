import axios from 'axios';

export const FETCH_PEOPLE = "FETCH_PEOPLE";
export const FETCH_PEOPLE_SUCCESS = "FETCH_PEOPLE_SUCCESS";
export const FETCH_PEOPLE_ERROR = "FETCH_PEOPLE_ERROR";

export const fetchPeeps = () => {
    return (dispatch) => {
        dispatch({type: FETCH_PEOPLE})
        axios.get('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49/people')
        .then((res) =>{
            console.log(res)
            dispatch({type: FETCH_PEOPLE_SUCCESS, payload: res.data});
        })
        .catch((err) =>{
            console.log(err);
            dispatch({type: FETCH_PEOPLE_ERROR, payload: {message: 'And I oop! Just hang in there for a sec.'}});
        })
    };
};

