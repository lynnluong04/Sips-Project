//components/BusinessForm
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { thunkCreateBusiness } from '../../store/business';

const categories = ['bar', 'bubble tea', 'coffee', 'smoothies', 'tea'];

const CreateBusinessForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

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

    async function handleSubmit(e) {
        e.preventDefault();

        const businessData = {
            userId: sessionUser.id,
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

        let createdBusiness = await dispatch(thunkCreateBusiness(businessData))

        if(createdBusiness) {
            history.push(`/businesses/${createdBusiness.id}`)
        }
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
       history.push(`/`)
      };

    return (
        <>
            <h2>Add your business</h2>
            <form className='create-business-form' onSubmit={handleSubmit}>
                <label>
                    Name of your business
                    <input type='text' name='name' value={name} onChange={updateName}/>
                </label>
                <label>
                    Description
                    <input type='text' name='description' value={description} onChange={updateDescription}/>
                </label>
                <label>
                    Address
                    <input type='text' name='address' value={address} onChange={updateAddress}/>
                </label>
                <label>
                    City
                    <input type='text' name='city' value={city} onChange={updateCity}/>
                </label>
                <label>
                    State
                    <input type='text' name='state' value={state} onChange={updateState}/>
                </label>
                <label>
                    Zipcode
                    <input type='text' name='zipcode' value={zipcode} onChange={updateZipcode}/>
                </label>
                <label>
                    Category
                    <select value={category} onChange={updateCategory}>
                        {categories.map(type =>
                            <option key={type}>{type}</option>
                        )}
                    </select>
                </label>
                <label>
                    Phone Number
                    <input type='text' name='phone' value={phone} onChange={updatePhone}/>
                </label>
                <label>
                    Website Url
                    <input type='text' name='websiteUrl' value={websiteUrl} onChange={updateWebsiteUrl}/>
                </label>
                <button type="submit">Add your business</button>
                <button type="button"onClick={handleCancelClick}>Cancel</button>
            </form>
        </>
    )
}

export default CreateBusinessForm;
