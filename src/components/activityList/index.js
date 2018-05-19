import React from 'react'
import Activity from '../activity'
import './style.css'

function ActivityList({activities}) {
    const activityElements = activities.map(activity => {
        return (
            <li key={activity.id} className="container-fluid Activity-Element">
                <Activity activity={activity}/>
            </li>
        )
    })

    return (
        <ul className="ActivityList">{activityElements}</ul>
    )
}

export default ActivityList