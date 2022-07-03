//store/business
import { csrfFetch } from './csrf';


// todo define type - CRUD
//CREATE
const CREATE_BUSINESS = 'businesses/createBusiness'
//READ
const GET_BUSINESSES = 'businesses/getBusinesses'
//UPDATE
const UPDATE_BUSINESS = 'businesses/updateBusiness'
//DELETE
const DELETE_BUSINESS = 'businesses/deleteBusiness'

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
        type: UPDATE_BUSINESS,
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
    const response = await csrfFetch(`/api/businesses/${businessData.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(businessData)
    })

    if (response.ok) {
        const editedBusiness = await response.json()
        dispatch(actionUpdateBusiness(editedBusiness))
        return editedBusiness;
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

    switch (action.type) {
        case GET_BUSINESSES:
            const newState1 = {}
            action.businesses.forEach(business => {
                newState1[business.id] = business
            });
            return newState1

        case CREATE_BUSINESS:
            const newState2 = {...state}
            newState2[action.business.id] = action.business
            return newState2

        case UPDATE_BUSINESS:
            const newState3 = { ...state }
            newState3[action.business.id] = {...action.business}
            return newState3

        case DELETE_BUSINESS:
            const newState4 = {...state}
            delete newState4[action.businessId]
            return newState4

        default:
            return state;
    }
}

export default businessReducer;
