import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getOnePirate } from '../services/internalApiService';

const OnePirate = (props) => {
    const { id } = useParams();
    const [pirate, setPirate] = useState({});

    useEffect(() => {
        getOnePirate(id)
            .then((data) => setPirate(data))
            .catch((error) => console.log(error.response))
    }, [id]);


    return (
        <div className='container'>
            <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-between mb-4 p-1'>
                <h1 className='navbar-brand mb-0'>{pirate.name}</h1>
                <div className='navbar-nav'>
                    <Link to='/pirates' className='btn btn-sm btn-primary mx-1'>
                        Crew Board
                    </Link>
                </div>
            </nav>
            <div className='d-flex justify-content-between'>
                <div className='w-50 shadow rounded border p-4'>
                    <img src={pirate.url} alt="Pirate img" />
                    <h1>"{pirate.catchphrase}"</h1>
                </div>
                <div className='w-50 shadow rounded border p-4'>
                    <h3 className='text-center'>About</h3>
                    <p>Position: {pirate.position}</p>
                    <p>Treasures: {pirate.chests}</p>
                    {
                        pirate.pegleg?<p>Peg Leg: Yes</p>:<p>Peg Leg: No</p>
                    }
                    {
                        pirate.eyepatch?<p>Eye Patch: Yes</p>:<p>Eye Patch: No</p>
                    }
                    {
                        pirate.hookhand?<p>Peg Leg: Yes</p>:<p>Hook Hand: No</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default OnePirate;