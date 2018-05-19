import React from 'react'
import ActivityList from '../activityList'
import './style.css'

function Block({activities}) {
    return(
        <div className="container-fluid Block">
            <h2>DESTIN BOATING ACTIVITIES</h2>
            <ActivityList activities={activities}/>
        </div>
    )
}

export default Block