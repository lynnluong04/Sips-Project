//components/AllReviews

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { thunkGetReviews, thunkDeleteReview } from "../../store/reviews";


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
        <>
            <h2> Reviews </h2>
            {reviews && (reviews).map((review) => {
                return (
                    <div key={review.id}>
                        <div>{review.title}</div>
                        <div>{review.description}</div>
                        <div>{review.rating}</div>

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
        </>
    )

}

export default AllReviews;
