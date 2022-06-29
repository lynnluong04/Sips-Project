//components/AllReviews

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetReviews } from "../../store/reviews";

const AllReviews = () => {

    const dispatch = useDispatch();
    const reviews = useSelector(state => {
        return Object.values(state.review);
    });

    useEffect(() => {
        dispatch(thunkGetReviews())
    }, [dispatch])

    if (!reviews) {
        return null;
    }

    return (
        <>
            <h2> Reviews </h2>
            {reviews && (reviews).map((review) => {
                return (
                    <div>
                        <div>{review.title}</div>
                        <div>{review.description}</div>
                        <div>{review.rating}</div>
                    </div>

                )
            })}
        </>
    )

}

export default AllReviews;
