// components/EditBusinessForm
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { thunkUpdateBusiness, thunkGetBusinesses } from '../../store/business';
import "./EditBusinessForm.css"

const categories = ['Bar', 'Bubble Tea', 'Coffee', 'Smoothies', 'Tea'];

const EditBusinessForm = ({ business, hideForm }) => {

    const dispatch = useDispatch();

    const [name, setName] = useState(business.name);
    const [description, setDescription] = useState(business.description);
    const [address, setAddress] = useState(business.address);
    const [zipcode, setZipcode] = useState(business.zipcode);
    const [category, setCategory] = useState(business.category);
    const [phone, setPhone] = useState(business.phone);
    const [websiteUrl, setWebsiteUrl] = useState(business.websiteUrl);

    const updateName = (e) => setName(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updateAddress = (e) => setAddress(e.target.value);
    const updateZipcode = (e) => setZipcode(e.target.value);
    const updatePhone = (e) => setPhone(e.target.value);
    const updateCategory = (e) => setCategory(e.target.value);
    const updateWebsiteUrl = (e) => setWebsiteUrl(e.target.value);
    const [validationErrors, setValidationErrors] = useState([]);

    useEffect(() => {
        dispatch(thunkGetBusinesses())
    }, []);

    const validate = () => {
        const validationErrors = []
        let phoneDigits = phone.replace(/\D/g, '');
        if (phoneDigits.length !== 10) {
            validationErrors.push('Please provide a 10-digit Phone number');
        }
        const validZip = /(^\d{5}$)/.test(zipcode)
        if (!validZip) {
            validationErrors.push('Please provide a valid zipcode')
        }
        return validationErrors;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const errors = validate();
        if (errors.length > 0) return setValidationErrors(errors)

        const businessData = {
            ...business,
            name,
            description,
            address,
            zipcode,
            category,
            phone,
            websiteUrl
        };
        const updatedBusiness = await dispatch(thunkUpdateBusiness(businessData));

        if (updatedBusiness) {
            hideForm();
        }
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        hideForm();
    };

    return (
        <div className='edit-business-container'>
            <form className='edit' onSubmit={handleSubmit} >
                {validationErrors.length > 0 && (
                    <ul>
                        {validationErrors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                )}
                <label className='edit'>
                    Name of your business
                    <input className='edit' type='text' name='name' value={name} onChange={updateName} />
                </label>
                <label className='edit'>
                    Description
                    <textarea className='edit' name='description' value={description || ""} onChange={updateDescription}></textarea>
                </label>
                <label className='edit'>
                    Address
                    <input className='edit' type='text' name='address' value={address} onChange={updateAddress} />
                    New York, NY
                </label>
                <label className='edit'>
                    Zipcode
                    <input className='edit' type='text' name='zipcode' value={zipcode} onChange={updateZipcode} />
                </label>
                <label className='edit'>
                    Category
                    <select className='edit' value={category} onChange={updateCategory}>
                        {categories.map(type =>
                            <option key={type}>{type}</option>
                        )}
                    </select>
                </label>
                <label className='edit'>
                    Phone Number
                    <input className='edit' type='text' name='phone' value={phone} onChange={updatePhone} />
                </label>
                <label className='edit'>
                    Website Url
                    <input className='edit' type='text' name='websiteUrl' value={websiteUrl} onChange={updateWebsiteUrl} />
                </label>
                <button className="submit edit" type="submit">Update your business</button>
                <button className="edit cancel button" type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    )
}

export default EditBusinessForm;
