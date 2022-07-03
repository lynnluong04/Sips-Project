// components/EditBusinessForm
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { thunkUpdateBusiness, thunkGetBusinesses } from '../../store/business';

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
        <>
            <form className='edit business form' onSubmit={handleSubmit} >
                {validationErrors.length > 0 && (
                    <ul>
                        {validationErrors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                )}
                <label>
                    Name of your business
                    <input type='text' name='name' value={name} onChange={updateName} />
                </label>
                <label>
                    Description
                    <textarea name='description' value={description || ""} onChange={updateDescription}></textarea>
                </label>
                <label>
                    Address
                    <input type='text' name='address' value={address} onChange={updateAddress} />
                    New York, NY
                </label>
                <label>
                    Zipcode
                    <input type='text' name='zipcode' value={zipcode} onChange={updateZipcode} />
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
                    <input type='text' name='phone' value={phone} onChange={updatePhone} />
                </label>
                <label>
                    Website Url
                    <input type='text' name='websiteUrl' value={websiteUrl} onChange={updateWebsiteUrl} />
                </label>
                <button className="submit update" type="submit">Update your business</button>
                <button className="cancel button" type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </>
    )
}

export default EditBusinessForm;
