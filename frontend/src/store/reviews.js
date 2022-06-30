//store/business
import { csrfFetch } from './csrf';

const CREATE_REVIEW = 'reviews/createReview'
const GET_REVIEWS = 'reviews/getReview'
const DELETE_REVIEW = 'reviews/deleteReview'

const actionCreateReview = (review) => {
    return {
        type: CREATE_REVIEW,
        review
    }
}

const actionGetReviews = (reviews) => {
    return {
        type: GET_REVIEWS,
        reviews
    }
}
const actionDeleteReview = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
}


export const thunkCreateReview = (reviewData) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/new`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reviewData)
    })

    if (response.ok) {
        const review = await response.json()
        dispatch(actionCreateReview(review))
        return review;
    }
}

export const thunkGetReviews = (businessId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/${businessId}`, {

    });

    if (response.ok) {
        const list = await response.json();
        dispatch(actionGetReviews(list));
        return response;
    } else {
        return response.json()
    }
}

export const thunkDeleteReview = (reviewId) => async (dispatch) =>{
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        const reviewID = await response.json()
        dispatch(actionDeleteReview(reviewID))
        return reviewID
    }
}

const reviewsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_REVIEWS:
            const newState1= {}
            action.reviews.forEach(review => {
                newState1[review.id] = review
            });
            return newState1

        case CREATE_REVIEW:
            const newState2 = {...state}
            newState2[action.review.id] = action.review
            return newState2

        case DELETE_REVIEW:
           const newState3 = {...state}
            delete newState3[action.reviewId]
            return newState3

        default:
            return state;
    }
}

export default reviewsReducer;
