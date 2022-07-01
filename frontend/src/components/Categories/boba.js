import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetBusinesses } from '../../store/business';
import { Link } from 'react-router-dom';

const AllBoba = () => {
    const dispatch = useDispatch();

    const businesses = useSelector(state => {
        return Object.values(state.business);
    });

    useEffect(() => {
        dispatch(thunkGetBusinesses())
    }, [dispatch])

    const bobas = businesses.filter((business) => business.category === "Bubble Tea")

    return (
        <div className='outer business container'>
            <div className='inner business container'>
                <h2 className='listing title'> Best Bubble Teas in New York, NY </h2>
                {bobas && (bobas).map((business) => {
                    return (
                        <div className='each business container'>
                            <Link key={business.name} to={`/businesses/${business.id}`}>
                                <div>
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

export default AllBoba;
