import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllPirates, deletePirate } from '../services/internalApiService';

const AllPirates = (props) => {
    const [pirates, setPirates] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllPirates()
            .then((data) => setPirates(data))
            .catch((error) => console.log(error.response))
    }, [pirates])
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-between mb-4 p-1'>
                <h1 className='navbar-brand mb-0'>Pirate Crew</h1>
                <div className='navbar-nav'>
                    <Link to='/pirates/new' className='btn btn-sm btn-primary mx-1'>
                        Add Pirate
                    </Link>
                </div>
            </nav>
            {pirates.map((pirate, i) => {
                return (
                    <div key={i} className="d-flex m-1 border border-dark p-4">
                        <img src={pirate.url} alt="Pirate Img" className='m-4 border border-secondary'/>
                        <div className='m-4'>
                            <h3 className='text-center'>{pirate.name}</h3>
                            <div className='d-flex justify-content-between'>
                                <Link to={`/pirates/${pirate._id}`} className="me-1 btn btn-primary">View Pirate</Link>
                                <button onClick={(e) => {
                                    deletePirate(pirate._id)
                                        .then((data) => {
                                            console.log("deleted: ", data)
                                            navigate("/pirates");
                                        })
                                        .catch((error) => console.log(error.response))
                                }} className="btn btn-danger">Walk the plank</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AllPirates;