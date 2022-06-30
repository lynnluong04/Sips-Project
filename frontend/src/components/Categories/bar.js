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
        <>
            <h2> Best Bars in New York, NY </h2>
            {bars && (bars).map((bar) => {
                return (
                    <Link key={bar.name} to={`/businesses/${bar.id}`}>
                        <div>
                            <div>{bar.name}</div>
                            <div>{bar.phone}</div>
                            <div>{bar.address} New York, NY {bar.zipcode} </div>
                            <div>Avg Rating goes here soon</div>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}

export default AllBars
