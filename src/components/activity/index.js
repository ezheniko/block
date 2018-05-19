import React from 'react'
import Gallery from '../gallery'
import Info from '../info'
import Price from '../price'
import Features from '../features'
import './style.css'

function Activity({activity}) {
    return (
        <div className="row">
            <Gallery images={activity.images}/>
            <Info info={activity.info}/>
            <div className="Activity-Right">
                <Price price={activity.price}/>
                <Features features={activity.features}/>
            </div>
        </div>
    )
}

export default Activity