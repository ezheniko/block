import React from 'react'
import {render} from 'react-dom'
import Block from './components/block'
import {activities} from './data'
import 'bootstrap/dist/css/bootstrap.css'

render(<Block activities = {activities} />, document.getElementById('root'))