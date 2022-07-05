import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetBusinesses } from '../../store/business';
import { Link } from 'react-router-dom';

const AllBoba = ({ notHome }) => {
    useEffect(()=> notHome())
    const dispatch = useDispatch();

    const businesses = useSelector(state => {
        return Object.values(state.business);
    });

    useEffect(() => {
        dispatch(thunkGetBusinesses())
    }, [dispatch])

    const bobas = businesses.filter((business) => business.category === "Bubble Tea")

    return (
        <div className='all businesses wrapper'>
            <div className='category-panel'>
                <div className='category-container'>
                <h3>Categories</h3>
                    <div className='category-item'>
                        <Link className="category-text bar" to="/bars">Bars</Link>
                    </div>
                    <div className='category-item'>
                        <Link className="category-text" to="/coffee">Coffee</Link>
                    </div>
                    <div className='category-item'>
                        <Link className="category-text" to="/tea">Tea</Link>
                    </div>
                    <div className='category-item'>
                        <Link className="category-text blue" to="/bubble-tea">Bubble Tea</Link>
                    </div>
                    <div className='category-item'>
                        <Link className="category-text" to="/smoothie">Smoothies</Link>
                    </div>
                </div>
            </div>
            <div className='outer business container'>
                <div className='inner business container'>
                    <h2 className='listing title'> Best Bubble Teas in New York, NY </h2>
                    {bobas && (bobas).map((business) => {
                        return (
                            <div className='each business container' key={business.name}>
                                <Link key={business.name} to={`/businesses/${business.id}`}>
                                    <div>
                                        <div className='title' >{business.name}</div>
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
            <div className='map'>
                <img className='map' alt="map of Manhattan" src="https://www.linkpicture.com/q/Screen-Shot-2022-07-04-at-10.49.39-AM.png" />
            </div>
        </div>
    )
}

export default AllBoba;
