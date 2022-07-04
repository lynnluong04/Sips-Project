//src/components/AllBusinesses/index.js

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetBusinesses } from '../../store/business';
import { Link } from 'react-router-dom';
import "./AllBusinesses.css"

const AllBusinesses = ({ notHome }) => {
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
        <div className='all businesses wrapper'>
            <div className='category-panel'>
                <div className='category-container'>
                    <h3>Categories</h3>
                    <div className='category-item'>
                        <Link className="category-text" to="/bars">Bars</Link>
                    </div>
                    <div className='category-item'>
                        <Link className="category-text"  to="/coffee">Coffee</Link>
                    </div>
                    <div className='category-item'>
                        <Link className="category-text"  to="/tea">Tea</Link>
                    </div>
                    <div className='category-item'>
                        <Link className="category-text"  to="/bubble-tea">Bubble Tea</Link>
                    </div>
                    <div className='category-item'>
                        <Link className="category-text"  to="/smoothie">Smoothies</Link>
                    </div>
                </div>

            </div>
            <div className='outer business container'>
                <h2 className='listing title'> Find the best drinks in New York, NY </h2>
                <div className='inner business container'>
                    {businesses && (businesses).map((business) => {
                        return (
                            <div className='each business container' key={business.name}>
                                <Link to={`/businesses/${business.id}`}>
                                    <div className='each-business-container'>
                                        <div className='title' >{business.name}</div>
                                        <div className='phone' >{business.phone}</div>
                                        <div className='address' >{business.address} New York, NY {business.zipcode} </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='map'>
                <img className='map' alt="map of Manhattan" src="https://www.linkpicture.com/q/Screen-Shot-2022-07-04-at-10.49.39-AM.png"/>
            </div>
        </div>
    )
}

export default AllBusinesses;
