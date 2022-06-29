//components/BusinessDetail

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetBusinesses, thunkDeleteBusiness } from '../../store/business';
import { useParams, useHistory } from 'react-router-dom';
import EditBusinessForm from '../EditBusinessForm';

const BusinessDetail = () => {
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory()
    const { businessId } = useParams();
    const business = useSelector(state => state.business[businessId]); //This gets the business
    const dispatch = useDispatch();

    const [showEditBusiness, setShowEditBusiness] = useState(false)

    async function onDelete() {
        await dispatch(thunkDeleteBusiness(business.id))
        await history.push('/businesses')
    }

    useEffect(() => {
        dispatch(thunkGetBusinesses())
    }, []);

    let content = null;
    if (showEditBusiness) {
        content = (
            <EditBusinessForm business={business} hideForm={() => setShowEditBusiness(false)} />
        )
    } else {
        content = (
            <>
                <h2>{business?.name}</h2>
                <div>{business?.description}</div>
                <div>{business?.phone}</div>
                <div>{business?.address} New York, NY {business?.zipcode} </div>
                <div>{business?.websiteUrl}</div>

                {sessionUser?.id === business?.userId &&
                    (
                    <div>
                        <button onClick={() => setShowEditBusiness(true)}>Update Your Business</button>
                        <button onClick={()=> onDelete()}>Delete Your Business </button>
                    </div>
                    )
                }

            </>
        )
    }

    return (

        < div >
            {content}
        </div >

    )

}

export default BusinessDetail;
