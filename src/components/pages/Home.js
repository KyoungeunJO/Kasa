import image from '../../images/image_home.png';
import { useState, useEffect } from 'react';
import Card from '../Card'
import { Link } from "react-router-dom";
import './Home.css'

function Home() {

    const [accomodations, setAccomodations] = useState([])

    useEffect(() => {
        fetch('/logements.json', 
            {headers: 
                {'Content-Type': 'application/json','Accept': 'application/json'}
        })
        .then(data => data.json())
        .then(data => setAccomodations(data))
        .catch(error => console.log(error))
    },[])

    return (
        <div className='container'>
            <section className="grid-center">
                <div className='element-filter'>
                    <img src={image} id="image-home" alt="image_montagne'" />
                </div>
                <h1 id="catch-phrase">Chez vous, partout et ailleurs</h1>
            </section>
            <main>
                {accomodations.map(accomodation => { 
                    return (
                        <Link to={`/accomodation/${accomodation.id}`} key={accomodation.id} >
                            <Card data={accomodation} >

                            </Card>
                        </Link>
                )})}
            </main>
        </div>
    )
}

export default Home