import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { thunkCreateReview } from '../../store/reviews';

const CreateReviewForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');

    const updateTitle = (e) => setTitle(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updateRating = (e) => setRating(e.target.value);



    return (
        <>
            <h2>Add a review</h2>
            <form className='create-review-form'>
                <label>
                    Title
                    <input type='text' name='title'></input>
                </label>
                <label>
                    Description
                    <textarea></textarea>
                </label>
                <label>
                    Rating
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </label>
                <button type="submit">Add your review</button>
                <button type="button">Cancel</button>
            </form>
        </>
    )
}

export default CreateReviewForm
