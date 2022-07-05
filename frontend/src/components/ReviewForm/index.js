import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { thunkCreateReview } from '../../store/reviews';
import "./ReviewForm.css"
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
        <div className='review-container'>
            <h2 className='review'>Add a review</h2>
            <form className='review' onSubmit={handleSubmit}>
                <label className='review'>
                    Title
                    <input className='review' type='text' name='title'onChange={updateTitle} required></input>
                </label>
                <label className='review'>
                    Description
                    <textarea className='review' onChange={updateDescription} value={description} required></textarea>
                </label>
                <label className='review'>
                    Rating
                    <select className='review' onChange={updateRating} value={rating} required>
                        <option disabled></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </label>
                <button className='submit review' type="submit">Submit your review</button>
                <button className='cancel' type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    )
}

export default CreateReviewForm
