//components/AllReviews

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { thunkGetReviews, thunkDeleteReview } from "../../store/reviews";
import "./AllReviews.css"


const AllReviews = () => {
    const sessionUser = useSelector(state => state.session.user);

    const { businessId } = useParams()
    const dispatch = useDispatch();
    const reviews = useSelector(state => {
        return Object.values(state.reviews);
    });

    useEffect(() => {
        dispatch(thunkGetReviews(businessId))
    }, [dispatch])

    if (!reviews) {
        return null;
    }



    return (
        <div className='reviews-container'>
            <h2> Reviews </h2>
            {reviews && (reviews).map((review) => {
                return (
                    <div className='each-review' key={review.id}>
                        <div id="review-title">{review.title}</div>
                        <div id="review-user">Posted by: {review.User.username}</div>
                        <div id="review-content">{review.description}</div>
                        <div id="review-rating"> rated {review.rating}/5 <img className='star' src="https://www.linkpicture.com/q/star-removebg-preview.png" type="image"/> </div>

                        {sessionUser?.id === review?.userId &&
                        (
                            <button
                            onClick={async()=> await dispatch(thunkDeleteReview(review.id))}
                            className="delete review"
                            >Delete Review</button>
                        )
                        }
                    </div>

                )
            })}
        </div>
    )

}

export default AllReviews;
