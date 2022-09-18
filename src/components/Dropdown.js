import './Dropdown.css'
import { useState } from 'react'
import drop from "../images/image_dropdown.png"

function Dropdown({children, title}) {

    const [isOpened, setIsOpened] = useState(false)

    const toogle = () => setIsOpened(!isOpened)

    return (
        <div className="textcard-dropdown">
            <div className="dropdown-header" onClick={toogle} >
                <h2>{title}</h2>
                <img src={drop} className="dropdown-icon" role="button" alt="" />
            </div>
            {isOpened ? children : ""}
        </div>
    )
}

export default Dropdown