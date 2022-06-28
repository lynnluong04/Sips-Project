import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { thunkCreateBusiness, thunkGetBusinesses } from '../../store/business';

const categories = ['bar', 'bubble tea', 'coffee', 'smoothies', 'tea'];

const CreateBusinessForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();

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
    const updateCategory = (e) => setCategory(e.target.value);
    const updateWebsiteUrl = (e) => setWebsiteUrl(e.target.value);

    async function onSubmit(e) {
        e.preventDefault();

        const payload = {
            name,
            description,
            address,
            city,
            state,
            zipcode,
            category,
            phone,
            websiteUrl
        };

        let createdBusiness = await dispatch(thunkCreateBusiness(payload))
        history.push(`/businesses/${createdBusiness.id}`)
    }

    return (
        <>
            <h2>Add your business</h2>
            <form className='create-business-form'>
                <label>
                    Name of your business
                    <input type='text' name='name' />
                </label>
                <label>
                    Description
                    <input type='text' name='description' />
                </label>
                <label>
                    Address
                    <input type='text' name='address' />
                </label>
                <label>
                    City
                    <input type='text' name='city' />
                </label>
                <label>
                    State
                    <input type='text' name='state' />
                </label>
                <label>
                    Zipcode
                    <input type='text' name='zipcode' />
                </label>
                <label>
                    <select>
                        {categories.map(type => {
                            <option key={type}>{type}</option>
                        })}
                    </select>
                </label>
                <label>
                    Phone Number
                    <input type='text' name='phone' />
                </label>
                <label>
                    Website Url
                    <input type='text' name='websiteUrl' />
                </label>
                <button type="submit">Add your business</button>
                <button type="button">Cancel</button>
            </form>
        </>
    )
}

export default CreateBusinessForm;
