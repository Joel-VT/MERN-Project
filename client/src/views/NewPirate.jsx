import { createPirate } from '../services/internalApiService';

import { Link} from 'react-router-dom';

import PirateForm from '../components/PirateForm';

const NewPirate = (props) => {
    const formData = {
        name: "",
        url: "",
        chests: 0,
        position: "",
        pegleg: true,
        eyepatch: true,
        hookhand: true
    }

    return (
        <div className='container'>
            <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-between mb-4 p-1'>
                <h1 className='navbar-brand mb-0'>Add Pirate</h1>
                <div className='navbar-nav'>
                    <Link to='/pirates' className='btn btn-sm btn-primary mx-1'>
                        Crew board
                    </Link>
                </div>
            </nav>
            <PirateForm initialFormData={formData} onSubmit={createPirate}/>
        </div>
    )
}

export default NewPirate;