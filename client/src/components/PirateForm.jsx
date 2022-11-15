import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getOnePirateByPosition } from "../services/internalApiService";

const PirateForm = (props) => {
    const { initialFormData, onSubmit } = props;
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState(null);
    const [loaded, setLoaded] = useState(null)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.position === "Captain") {
            getOnePirateByPosition()
                .then((data) => {
                    console.log('Cap Exists:', data);
                    if(data.length===0){
                        onSubmit(formData)
                        .then((data) => {
                            console.log('Pirate:', data);
                            navigate(`/pirates/${data._id}`)
                        })
                        .catch((error) => {
                            console.log(error.response);
                            setErrors(error.response?.data?.errors);
                        })
                    }
                    setLoaded(data);
                })
                .catch((error) => {
                    console.log(error.response);
                })
        }
        else{
            onSubmit(formData)
                .then((data) => {
                    console.log('Pirate:', data);
                    navigate(`/pirates/${data._id}`)
                })
                .catch((error) => {
                    console.log(error.response);
                    setErrors(error.response?.data?.errors);
                })
        }
    }

    const handleFormChanges = (e) => {
        if (e.target.type === "checkbox") {
            let updatedFormData = {
                ...formData,
                [e.target.name]: e.target.checked
            }
            setFormData({
                ...updatedFormData
            })
            return null;
        }
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='container'>
            <form onSubmit={(e) => { handleSubmit(e) }} className='mx-auto my-1'>
                <div className="d-flex justify-content-between">
                    <div>
                        <div className='row mb-3'>
                            <label htmlFor="name" className='form-label'>Pirate Name:</label>
                            <input type="text" name="name" id="name" className='form-control' onChange={handleFormChanges} value={formData.name} />
                            {
                                errors?.name && <p className='text-danger'>{errors.name.message}</p>
                            }
                        </div>
                        <div className='row mb-3'>
                            <label htmlFor="url" className='form-label'>Image Url:</label>
                            <input type="text" name="url" id="url" className='form-control' onChange={handleFormChanges} value={formData.url} />
                            {
                                errors?.url && <p className='text-danger'>{errors.url.message}</p>
                            }
                        </div>
                        <div className='row mb-3'>
                            <label htmlFor="chests" className='form-label'># of Treasure Chests:</label>
                            <input type="number" name="chests" id="chests" className='form-control' onChange={handleFormChanges} value={formData.chests} />
                            {
                                errors?.chests && <p className='text-danger'>{errors.chests.message}</p>
                            }
                        </div>
                        <div className='row mb-3'>
                            <label htmlFor="catchphrase" className='form-label'>Pirate Catch Phrase:</label>
                            <input type="text" name="catchphrase" id="catchphrase" className='form-control' onChange={handleFormChanges} value={formData.catchphrase} />
                            {
                                errors?.catchphrase && <p className='text-danger'>{errors.catchphrase.message}</p>
                            }
                        </div>
                    </div>
                    <div>
                        <div className='row mb-3'>
                            <label htmlFor="position" className='form-label'>Crew Position:</label>
                            <select name="position" id="position" value={formData.position} onChange={handleFormChanges} className="custom-select">
                                <option value="" disabled>--Please choose a position--</option>
                                <option value="Captain">Captain</option>
                                <option value="First Mate">First Mate</option>
                                <option value="Quarter Master">Quarter Master</option>
                                <option value="Boatswain">Boatswain</option>
                                <option value="Powder Monkey">Powder Monkey</option>
                            </select>
                            {
                                errors?.position && <p className='text-danger'>{errors.position.message}</p>
                            }
                        </div>
                            {
                                loaded && <p className="text-danger">Captain already exists</p>
                            }
                        <div className="form-check">
                            <input
                                onChange={handleFormChanges}
                                name="pegleg"
                                type="checkbox"
                                id="pegleg"
                                checked={formData.pegleg ? true : false}
                            />
                            <label className="form-check-label" htmlFor="pegleg">Peg Leg</label>
                        </div>
                        <div className="form-check">
                            <input
                                onChange={handleFormChanges}
                                name="eyepatch"
                                type="checkbox"
                                id="eyepatch"
                                checked={formData.eyepatch ? true : false}
                            />
                            <label className="form-check-label" htmlFor="eyepatch">Eye Patch</label>
                        </div>
                        <div className="form-check">
                            <input
                                onChange={handleFormChanges}
                                name="hookhand"
                                type="checkbox"
                                id="hookhand"
                                checked={formData.hookhand ? true : false}
                            />
                            <label className="form-check-label" htmlFor="hookhand">Hook hand</label>
                        </div>
                        <button type='submit' className='btn btn-primary'>Add Pirate</button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default PirateForm;