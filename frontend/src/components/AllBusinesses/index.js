//src/components/AllBusinesses/index.js

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetBusinesses } from '../../store/business';
import { Link } from 'react-router-dom';
import './AllBusinesses.css'

const AllBusinesses = ({notHome}) => {
notHome();
    const dispatch = useDispatch();
    const businesses = useSelector(state => {
        return Object.values(state.business);
    });

    useEffect(() => {
        dispatch(thunkGetBusinesses())
    }, [dispatch])

    if (!businesses) {
        return null;
    }


    return (

        <div className='outer business container'>
            <h2 className='listing title'> Find the best drinks in New York, NY </h2>
            <div className='inner business container'>
            {businesses && (businesses).map((business) => {
                return (
                    <div className='each business container'>
                        <Link key={business.name} to={`/businesses/${business.id}`}>
                            <div className='each-business-container'>
                                <div>{business.name}</div>
                                <div>{business.phone}</div>
                                <div>{business.address} New York, NY {business.zipcode} </div>
                                <div>Avg Rating goes here soon</div>
                            </div>
                        </Link>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default AllBusinesses;
