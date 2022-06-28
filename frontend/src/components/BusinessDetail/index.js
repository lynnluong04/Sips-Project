//components/BusinessDetail

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetBusinesses } from '../../store/business';
import { useParams } from 'react-router-dom';

const BusinessDetail = () => {
    const { businessId } = useParams();
    const business = useSelector(state => state.business[businessId]); //This gets the business
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(thunkGetBusinesses())
    }, []);

    return (
    
        < div >
            <h2>{business?.name}</h2>
            <div>{business?.description}</div>
            <div>{business?.phone}</div>
            <div>{business?.address} New York, NY {business?.zipcode} </div>
            <div>{business?.websiteUrl}</div>
        </div >

    )

}

export default BusinessDetail;
