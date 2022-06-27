import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { thunkCreateBusiness } from '../store/business.js'


const categories = ['bar', 'bubble tea', 'coffee','smoothies', 'tea'];

const CreateBusinessForm = ()=> {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('New York');
    const [state, setState] = useState('NY');
    const [zipcode, setZipcode] = useState('');
    const [category, setCategory] = useState('');
    const [phone, setPhone] = useState('');
    const [websiteUrl, setWebsiteUrl] = useState('');
    const [errorMessages, setErrorMessages] = useState({});

    const updateName = (e) => setName(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updateAddress = (e) => setAddress(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateState = (e) => setState(e.target.value);
    const updateZipcode = (e) => setZipcode(e.target.value);
    const updatePhone = (e) => setPhone(e.target.value);
    const updateWebsiteUrl= (e) => setWebsiteUrl(e.target.value);

    async function onSubmit(e) {
        e.preventDefault();
    }

    return (
        <>
            <h2>Add your business</h2>
            <form className='create-business-form'>
                <label>
                    Name of your business
                    <input type='text' name='name' value={}/>
                </label>
                <label>
                    Name of your business
                    <input type='text' name='name' value={}/>
                </label>
                <label>
                    Name of your business
                    <input type='text' name='name' value={}/>
                </label>
                <label>
                    Name of your business
                    <input type='text' name='name' value={}/>
                </label>
                <label>
                    Name of your business
                    <input type='text' name='name' value={}/>
                </label>
                <label>
                    Name of your business
                    <input type='text' name='name' value={}/>
                </label>
                <label>
                    Name of your business
                    <input type='text' name='name' value={}/>
                </label>
                <label>
                    Name of your business
                    <input type='text' name='name' value={}/>
                </label>
            </form>
        </>
    )
}
