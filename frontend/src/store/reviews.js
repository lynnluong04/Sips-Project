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
    const response = await csrfFetch(`/api/reviews`, {
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
    const response = await csrfFetch(`/api/reviews`, {
        method: 'DELETE',
    });

    if (response.ok) {
        const reviewId = await response.json()
        dispatch(actionDeleteReview(reviewId))
        return reviewId
    }
}

const reviewsReducer = (state = {}, action) => {
    let newState = {}
    switch (action.type) {
        case GET_REVIEWS:
            action.reviews.forEach(review => {
                newState[review.id] = review
            });
            return newState

        case CREATE_REVIEW:
            newState[action.review.id] = action.review
            return newState

        case DELETE_REVIEW:
            newState = {...state}
            delete newState[action.reviewId]
            return newState

        default:
            return state;
    }
}

export default reviewsReducer;
