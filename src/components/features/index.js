import React from 'react'
import './style.css'

function Features({features}) {
    const featureElements = features.map(feature => {
    const backgroundImage = `url(/images/${feature.icon})`
    const style = { backgroundImage }
        return (
            <li key={feature.id} className="Feature-Item" style={style}>
                {feature.title}
            </li>
        )
    })
    return <ul className="Features">{featureElements}</ul>
}

export default Features