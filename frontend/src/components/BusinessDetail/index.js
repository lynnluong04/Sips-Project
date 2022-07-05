//components/BusinessDetail

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetBusinesses, thunkDeleteBusiness } from '../../store/business';
import { useParams, useHistory } from 'react-router-dom';
import EditBusinessForm from '../EditBusinessForm';
import CreateReviewForm from '../ReviewForm';
import "./BusinessDetail.css"
import AllReviews from '../AllReviews';


const BusinessDetail = ({ notHome }) => {
    useEffect(() => notHome())
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory()
    const { businessId } = useParams();
    const business = useSelector(state => state.business[businessId]); //This gets the business
    const dispatch = useDispatch();

    const [showEditBusiness, setShowEditBusiness] = useState(false)
    const [showReviewForm, setShowReviewForm] = useState(false)

    async function onDelete() {
        await dispatch(thunkDeleteBusiness(business.id))
        await history.push('/businesses')
    }

    useEffect(() => {
        dispatch(thunkGetBusinesses())
    }, [dispatch]);


    let content = null;
    if (showEditBusiness) {
        content = (
            <EditBusinessForm business={business} hideForm={() => setShowEditBusiness(false)} />
        )
    } else {
        content = (
            <div >
                <div>{business?.description}</div>
                <div>{business?.phone}</div>
                <div>{business?.address} New York, NY {business?.zipcode} </div>

                <div>{business?.websiteUrl}</div>

                {sessionUser?.id === business?.userId &&
                    (
                        <div>
                            <button className='update business' onClick={() => setShowEditBusiness(true)}>Update Your Business</button>
                            <button className='delete business' onClick={() => onDelete()}>Delete Your Business </button>
                        </div>
                    )
                }

                <button onClick={() => setShowReviewForm(true)} className="Write a review"> Add a Review </button>
                {showReviewForm && (<CreateReviewForm business={business} hideForm={() => setShowReviewForm(false)} />)}
            </div>
        )
    }



    return (

        < div className='business container' >
            <div className='business content'>
                <h2 id="business-name">{business?.name}</h2>
                <div className='images'>
                    <img src='' alt="example"></img>
                    <img src='' alt="example"></img>
                    <img src='' alt="example"></img>
                    <img src='' alt="example"></img>
                </div>
                {content}
            </div>
            <div className='reviews'>
                <AllReviews />
            </div>
        </div >

    )

}

export default BusinessDetail;
