import React from 'react'
import './style.css'

function Price({price}) {
    return (
        <p className="Price">
            <span>from</span>
            <span className="Price-Count"><span>$</span> {price}</span>
            <span>+ tax</span>
        </p>
    )
}

export default Price