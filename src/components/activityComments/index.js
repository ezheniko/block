import React from 'react'
import './style.css'

function ActivityComments({comments}) {
    const commentElements = comments.map( comment => {
        return (
            <li key={comment.id} className="Activity-Comment">{comment.text}</li>
        )
    });

    return <ul className="Activity-Comments">{commentElements}</ul>
}

export default ActivityComments