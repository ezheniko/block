import React from 'react'
import './style.css'

function Gallery({images}) {
    return (
        <div className="Gallery">
            <div className="Gallery-Big">
                <img src={`images/${images[0]}`} alt={images[0].alt}/>
            </div>
            <div className="Gallery-Small">
                <div><img src={`images/${images[1]}`} alt={images[1].alt}/></div>
                <div><img src={`images/${images[2]}`} alt={images[2].alt}/></div>
            </div>
        </div>
    )
}

export default Gallery