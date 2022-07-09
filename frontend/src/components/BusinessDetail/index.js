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
    } else if (showReviewForm) {
        content = (
            <CreateReviewForm business={business} hideForm={() => setShowReviewForm(false)} />
        )
    } else {
        content = (
            <div className="business-info" >
                <div>{business?.description}</div>
                <div>{business?.phone}</div>
                <div>{business?.address} New York, NY {business?.zipcode} </div>
                <div><a id="website" href={business?.websiteUrl}>{business?.websiteUrl}</a></div>
                {sessionUser?.id === business?.userId &&
                    (
                        <div className='update-delete-buttons'>
                            <button className='update business' onClick={() => setShowEditBusiness(true)}>Update Your Business</button>
                            <button className='delete business' onClick={() => onDelete()}>Delete Your Business </button>
                        </div>
                    )
                }

                <button onClick={() => setShowReviewForm(true)} className="add review"> Write a Review </button>
            </div>
        )
    }



    return (

        < div className='business-detail-container' >
            <div className='business content'>
                <div className='business-info-container'>
                    <h2 id="business-name">{business?.name}</h2>
                    {content}
                </div>
                <div className='images container'>
                    <img className='placeholder' src='https://s3-media0.fl.yelpcdn.com/bphoto/C9kLckBI7NTHBnHV-98qEw/o.jpg' alt="example"></img>
                    <img className='placeholder' src='https://s3-media0.fl.yelpcdn.com/bphoto/TXWj725O5CbhsxmOuKgwnA/o.jpg' alt="example"></img>
                    <img className='placeholder' src='https://s3-media0.fl.yelpcdn.com/bphoto/pzNrEjTSvg4jvVoLpeUT6w/o.jpg' alt="example"></img>
                    <img className='placeholder' src='https://s3-media0.fl.yelpcdn.com/bphoto/jwdZpTqbT0Ft7oKOpKGO3A/o.jpg' alt="example"></img>
                    <img className='placeholder' src='https://s3-media0.fl.yelpcdn.com/bphoto/H_AFCZwAZsnbimNAyPrbbw/o.jpg' alt="example"></img>
                </div>
            </div>
            <div className='reviews content'>
                <AllReviews />
            </div>
        </div >

    )

}

export default BusinessDetail;
