//store/business
import { csrfFetch } from './csrf';


// todo define type - CRUD
//CREATE
const CREATE_BUSINESS = 'businesses/createBusiness'
//READ
const GET_BUSINESSES = 'businesses/getBusinesses'
//UPDATE
const UPDATE_BUSINESS = 'businesses/updateBusinesses'
//DELETE
const DELETE_BUSINESS = 'businesses/deleteBusinesses'

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
const actionUpdateBusiness = (business) => {
    return {
        type: GET_BUSINESSES,
        business
    }
}
const actionDeleteBusiness = (businessId) => {
    return {
        type: DELETE_BUSINESS,
        businessId
    }
}



// todo thunks
export const thunkCreateBusiness = (businessData) => async (dispatch) => {
    const response = await csrfFetch(`/api/businesses/new`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(businessData)
    })

    if (response.ok) {
        const business = await response.json()
        dispatch(actionCreateBusiness(business))
        return business;
    }
}

export const thunkGetBusinesses = () => async (dispatch) => {
    const response = await csrfFetch('/api/businesses');

    if (response.ok) {
        const list = await response.json();
        dispatch(actionGetBusinesses(list));
        return response;
    } else {
        return response.json()
    }
}

export const thunkUpdateBusiness = (businessData) => async (dispatch) => {
    const response = await csrfFetch(`/api/businesses/:businessId`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(businessData)
    })

    if (response.ok) {
        const business = await response.json()
        dispatch(actionUpdateBusiness(business))
        return business;
    }
}

export const thunkDeleteBusiness = (businessId) => async (dispatch) =>{
    const response = await csrfFetch(`/api/businesses/${businessId}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        const businessId = await response.json()
        dispatch(actionDeleteBusiness(businessId))
        return businessId
    }
}

// todo reducers (slice of state)
const businessReducer = (state = {}, action) => {
    let newState = {}
    switch (action.type) {
        case GET_BUSINESSES:
            action.businesses.forEach(business => {
                newState[business.id] = business
            });
            return newState

        case CREATE_BUSINESS:
            newState[action.business.id] = action.business
            return newState

        case UPDATE_BUSINESS:
            newState = { ...state }
            newState[action.business.id] = action.business
            return newState

        case DELETE_BUSINESS:
            newState = {...state}
            delete newState[action.businessId]
            return newState

        default:
            return state;
    }
}

export default businessReducer;
