import {FETCH_PEOPLE,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_ERROR,} from '../actions'

const initialState = {
    people: [],
    loadingPeople: true,
    errorMessage: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PEOPLE:
        return{
          ...state,
          loadingPeople: true
        }
      case FETCH_PEOPLE_ERROR:
        return{
           ...state,
           loadingPeople: false,
           errorMessage: action.payload.message
        }
      case FETCH_PEOPLE_SUCCESS:
        return {
          ...state,
          people: action.payload,
          loadingPeople: false
        }
        default:
        return state;
    }
}