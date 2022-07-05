//components/BusinessForm
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { thunkCreateBusiness } from '../../store/business';
import "./BusinessForm.css"

const categories = ['Bar', 'Bubble Tea', 'Coffee', 'Smoothies', 'Tea'];

const CreateBusinessForm = ({notHome}) => {
    useEffect(()=> notHome())
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [category, setCategory] = useState('');
    const [phone, setPhone] = useState('');
    const [websiteUrl, setWebsiteUrl] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);

    const updateName = (e) => setName(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updateAddress = (e) => setAddress(e.target.value);
    const updateZipcode = (e) => setZipcode(e.target.value);
    const updatePhone = (e) => setPhone(e.target.value);
    const updateCategory = (e) => setCategory(e.target.value);
    const updateWebsiteUrl = (e) => setWebsiteUrl(e.target.value);

    const reset = () => {
        setName('');
        setDescription('');
        setAddress('');
        setZipcode('');
        setPhone('')
        setWebsiteUrl('');
    }

    const validate = () => {
        const validationErrors = []
        let phoneDigits = phone.replace(/\D/g, '');
        if (phoneDigits.length !== 10) {
            validationErrors.push('Please provide a 10-digit Phone number');
        }
        const validZip = /(^\d{5}$)/.test(zipcode)
        if(!validZip) {
            validationErrors.push('Please provide a valid zipcode')
        }
        return validationErrors;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const errors = validate();
        if (errors.length > 0) return setValidationErrors(errors)

        const businessData = {
            userId: sessionUser.id,
            name,
            description,
            address,
            zipcode,
            category,
            phone,
            websiteUrl
        };


        let createdBusiness = await dispatch(thunkCreateBusiness(businessData))

        if (createdBusiness) {
            reset()
            history.push(`/businesses/${createdBusiness.id}`)
        }
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push(`/`)
    };

    return (
        <div className='add-business-container'>
            <h2 className='add-business'>Add your business</h2>
            {validationErrors.length > 0 && (
                <ul>
                    {validationErrors.map(error => <li key={error}>{error}</li>)}
                </ul>
            )}
            <form className='add-business' onSubmit={handleSubmit}>
                <label className='add-business'>
                    Name of your business
                    <input className='add-business' type='text' name='name' value={name} onChange={updateName} required />
                </label>
                <label className='add-business'>
                    Description
                    <textarea className='add-business' name='description' value={description} onChange={updateDescription} required ></textarea>
                </label>
                <label className='add-business'>
                    Address
                    <input className='add-business' type='text' name='address' value={address} onChange={updateAddress} required />
                       New York, NY
                </label>
                <label className='add-business'>
                    Zipcode
                    <input className='add-business' type='text' name='zipcode' value={zipcode} onChange={updateZipcode} placeholder="5 digit zipcode" required />
                </label>
                <label className='add-business'>
                    Category
                    <select className='add-business' value={category} onChange={updateCategory}>
                        {categories.map(type =>
                            <option key={type}>{type}</option>
                        )}
                    </select>
                </label>
                <label className='add-business'>
                    Phone Number
                    <input className='add-business' type='website' name='phone' value={phone} onChange={updatePhone} required placeholder='10 digit phone number'/>
                </label>
                <label className='add-business'>
                    Website Url
                    <input className='add-business' type='url' name='websiteUrl' value={websiteUrl} onChange={updateWebsiteUrl} placeholder="Optional" />
                </label>
                <button className="submit add-business" type="submit">Add your business</button>
                <button className="cancel add-business" type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    )
}

export default CreateBusinessForm;
