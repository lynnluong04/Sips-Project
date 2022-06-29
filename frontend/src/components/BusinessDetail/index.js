//components/BusinessDetail

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetBusinesses } from '../../store/business';
import { useParams } from 'react-router-dom';
import EditBusinessForm from '../EditBusinessForm';

const BusinessDetail = () => {
    const sessionUser = useSelector(state => state.session.user);
    const { businessId } = useParams();
    const business = useSelector(state => state.business[businessId]); //This gets the business
    const dispatch = useDispatch();

    const [showEditBusiness, setShowEditBusiness] = useState(false)

    // if (sessionUser) {
    //     console.log(typeof parseInt(businessId, 10))
    // }

    useEffect(() => {
        dispatch(thunkGetBusinesses())
    }, []);

    let editForm = null;
    if (showEditBusiness) {
        editForm = (
            <EditBusinessForm business={business} hideForm={() => setShowEditBusiness(false)}/>
        )
    }


    return (

        < div >
            <h2>{business?.name}</h2>
            <div>{business?.description}</div>
            <div>{business?.phone}</div>
            <div>{business?.address} New York, NY {business?.zipcode} </div>
            <div>{business?.websiteUrl}</div>

            <button onClick={() => setShowEditBusiness(true)}>Edit</button>
            {editForm}
        </div >

    )

}

export default BusinessDetail;
