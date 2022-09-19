import './Accomodation.css'
import Dropdown from '../Dropdown';
import Tag from "../Tag";
import Gallery from '../Gallery';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import star from '../../images/star.svg';
import stargrey from '../../images/star-grey.svg';

function Accomodation() {

    let { id } = useParams()
    let nav = useNavigate()

    let [accomodation, setAccomodation] = useState({})

    useEffect(() => {
        fetch('/logements.json', 
            {headers: 
                {'Content-Type': 'application/json','Accept': 'application/json'}
        })
        .then(data => data.json())
        .then(data => { 
            const accomodationData = data.filter(a => a.id === id)
            if (accomodationData.length > 0) {
                return accomodationData[0]
            }
            nav('/notfound')
        })
        .then(data => setAccomodation(data))
        .catch(error => console.log(error))
    }, [])

    if (Object.keys(accomodation).length > 0) {
        return (
            <div className='container'>
                <Gallery data={accomodation.pictures} />
                <div className='accomation-info'>    
                    <div className='accomodation-header'>
                        <div className='title-location'>
                            <h1>{accomodation.title}</h1>
                            <p>{accomodation.location}</p>
                        </div>
                        <div className="tags-container">
                            {accomodation.tags.map(tag => {
                                return (
                                    <Tag><span>{tag}</span></Tag>
                                )
                            })}
                        </div>
                    </div>

                    <div className="accomodation-details">
                        <div className='info-host'>
                            <p className='name-host'>{accomodation.host.name}</p>
                            <img src={accomodation.host.picture} id='photo-host' alt='profil of host' />
                        </div>

                        <div className="stars-container">
                            {[...Array(parseInt(accomodation.rating))].map(s => {
                                return (
                                    <img src={star} alt="" className="star" />
                                )
                            })}
                            {[...Array(5 - parseInt(accomodation.rating))].map(s => {
                                return (
                                    <img src={stargrey} alt="" className="star" />
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className='annexe-card'>
                    <Dropdown title={"Description"}>
                        <p>{accomodation.description}</p>
                    </Dropdown>

                    <Dropdown title={"Équipements"}>
                        <p>{accomodation.equipments.map(eq => {
                            return (
                                <li>{eq}</li>
                            )
                        })}</p>
                    </Dropdown>
                </div>
            </div>
        )
    }
    return (
        <div>
            <p>Chargement en cours...</p>
        </div>
    )
}


export default Accomodation