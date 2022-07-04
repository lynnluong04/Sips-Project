//src/components/AllBusinesses/index.js

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetBusinesses } from '../../store/business';
import { thunkGetImages } from '../../store/images';
import { Link } from 'react-router-dom';

const AllBusinesses = ({notHome}) => {
notHome();
    const dispatch = useDispatch();
    const businesses = useSelector(state => {
        return Object.values(state.business);
    });

    const images = useSelector(state=> {
        return Object.values(state.images)
    })

    console.log("IMAGES??", images)

    useEffect(() => {
        dispatch(thunkGetBusinesses())
    }, [dispatch])

    useEffect(()=> {
        dispatch(thunkGetImages())
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
                    <div className='each business container'  key={business.name}>
                        <Link to={`/businesses/${business.id}`}>
                            <div className='each-business-container'>
                                {images.length> 0? (
                                <img src={images[0]}/>
                                ): (<div></div>)}
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
