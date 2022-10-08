

import React, { useEffect }  from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

const TaskComponent = ({ task }) => {

    const { name, description, level , completed } = task

    useEffect(()=> {
        console.log('Created Task');
        return () => {
            console.log(`Task: ${name} is going to unmount`)
        }
    })
 
  return (
    <>
        <h2>
            Name: { name }
        </h2>
        <h3>
            Description: { description }
        </h3>
        <h4>
            Level: { level }
        </h4>
        <p>
            This task is: { completed ? 'COMPLETED' : 'PENDING'}
        </p>
    </>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent;