//store/business
import { csrfFetch } from './csrf';


// todo define type - CRUD
//CREATE
const CREATE_BUSINESS = 'businesses/createBusiness'
//READ
const GET_BUSINESSES = 'businesses/getBusinesses'
//UPDATE
//DELETE


// todo action creators
const actionCreateBusiness = (business) => {
    return {
        type: CREATE_BUSINESS,
        business
    }
}
const actionGetBusinesses = (businesses) => {
    return {
        type: GET_BUSINESSES,
        businesses
    }
}
// todo thunks
export const thunkCreateBusiness = (businessData) => async (dispatch) => {
    const response = await csrfFetch(`/api/businesses/new`)
}

export const thunkGetBusinesses = () => async dispatch => {
    const response = await csrfFetch('/api/businesses');

    if (response.ok) {
        const businesses = await response.json();
        dispatch(actionGetBusinesses(businesses));
        return response;
    } else {
        return response.json()
    }
}

// todo reducers (slice of state)
const businessReducer = (state = {}, action) => {
    let newState = {...state}
    switch (action.type) {
      case GET_BUSINESSES:
        action.businesses.forEach(business => {
            newState[business.id] = business
        });
        return newState

      default:
        return state;
    }
}

export default businessReducer;
