//src/components/AllBusinesses/index.js

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { thunkGetBusinesses } from '../store/business.js';

const AllBusinesses = ()=> {

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch()
    })
    return (

        <>
            <h2> Find the best drinks in New York, NY </h2>
        </>
    )
}

export default AllBusinesses;
