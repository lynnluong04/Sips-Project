import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { thunkCreateReview } from '../../store/reviews';

const CreateReviewForm = ({ business, hideForm }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');

    const updateTitle = (e) => setTitle(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updateRating = (e) => setRating(e.target.value);

    async function handleSubmit(e) {
        e.preventDefault();

        const reviewData = {
            userId: sessionUser.id,
            businessId: business.id,
            title,
            description,
            rating
        };

        const review = await dispatch(thunkCreateReview(reviewData));

        if(review){
            hideForm();
        }
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        hideForm();
    };

    return (
        <>
            <h2>Add a review</h2>
            <form className='create-review-form' onSubmit={handleSubmit}>
                <label>
                    Title
                    <input type='text' name='title'onChange={updateTitle}></input>
                </label>
                <label>
                    Description
                    <textarea onChange={updateDescription} value={description}></textarea>
                </label>
                <label>
                    Rating
                    <select onChange={updateRating} value={rating}>
                        <option disabled></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </label>
                <button type="submit">Submit your review</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </>
    )
}

export default CreateReviewForm
