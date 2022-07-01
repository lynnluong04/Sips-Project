import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetBusinesses } from '../../store/business';
import { Link } from 'react-router-dom';

const AllBars = () => {
    const dispatch = useDispatch();

    const businesses = useSelector(state => {
        return Object.values(state.business);
    });

    useEffect(() => {
        dispatch(thunkGetBusinesses())
    }, [dispatch])

    const bars = businesses.filter((business) => business.category === "Bar")

    return (
        <div className='outer business container'>
            <h2 className='listing title'> Best Bars in New York, NY </h2>
            <div className='inner business container'>
            {bars && (bars).map((bar) => {
                return (
                    <div className='each business container'>
                        <Link key={bar.name} to={`/businesses/${bar.id}`}>
                            <div>
                                <div>{bar.name}</div>
                                <div>{bar.phone}</div>
                                <div>{bar.address} New York, NY {bar.zipcode} </div>
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

export default AllBars
