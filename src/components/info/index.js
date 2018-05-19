import React from 'react'
import ActivityComments from '../activityComments'
import ActivityNumbers from '../activityNumbers'
import './style.css'

function Info({info}) {
    return (
        <div className="col Info">
            <h3 className="Info-Title">{info.title}</h3>
            <ActivityNumbers numbers={info.numbers}/>
            <p className="Info-Description">{info.text}</p>
            <ActivityComments comments={info.comments}/>
        </div>
    )
}

export default Info