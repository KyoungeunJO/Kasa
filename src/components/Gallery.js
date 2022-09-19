import './Gallery.css'
import { useState } from 'react';
import drop from "../images/image_dropdown.svg";

export default function Gallery({ data }) {

    const [index, setIndex] = useState(0)
    const n = data.length

    const moveImg = (n) => {
        const newIndex = (index + n) % data.length
        console.log(newIndex);
        setIndex(newIndex < 0 ? data.length -1 : newIndex)
    }

    return (
        <div id="gallery-frame">
            { n > 1 && <img src={drop} id="prev" role="button" alt="" onClick={() => moveImg(-1)} /> }
            { n > 1 && <img src={drop} id="next" role="button" alt="" onClick={() => moveImg(1)} /> }
            <img src={data[index]} id="current-img" alt="Accomodation pics" />
            { n > 1 && <span>{`${index+1}/${n}`}</span>}
        </div>
    )
}