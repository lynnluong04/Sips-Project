//store/business
import { csrfFetch } from './csrf';


const CREATE_IMAGE = 'images/createImage'
const GET_IMAGES = 'imgs/getBusinesses'


const actionCreateImage = (image) => {
    return {
        type: CREATE_IMAGE,
        image
    }
}
const actionGetImages = (images) => {
    return {
        type: GET_IMAGES,
        images
    }
}


export const thunkCreateImage = (imageData) => async (dispatch) => {
    const response = await csrfFetch(`/api/images/new`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(imageData)
    })

    if (response.ok) {
        const image = await response.json()
        dispatch(actionCreateImage(image))
        return image;
    }
}

export const thunkGetImages = () => async (dispatch) => {
    const response = await csrfFetch('/api/images');

    if (response.ok) {
        const images = await response.json();
        dispatch(actionGetImages(images));
        return images;
    }
}

const imageReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_IMAGES:
            const newState1 = {}
            action.images.forEach(image => {
                newState1[image.id] = image
            })
            return newState1;

        case CREATE_IMAGE:
            const newState2 = { ...state }
            newState2[action.image.id] = { ...action.business }
            return newState2;

        default:
            return state;
    }
}

export default imageReducer;
