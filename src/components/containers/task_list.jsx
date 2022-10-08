
import React, { useEffect, useState } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'

const TaskListComponent = () => {

    const defaultTask = new Task('Programar', 'Programar TODO', false, LEVELS.NORMAL)

    const [tasks, setTasks] = useState(defaultTask);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        console.log('Task State has been modified');
        setLoading(false);
        return() => {
            console.log('TaskList component is going to unmount');
        }
    }, [tasks])

    const changeCompleted = (id) => {
        console.log('Update State');
    }
  return (
    <>
        <h1>Your Task</h1>
        <TaskComponent task={defaultTask} />
    </>
  )
}

export default TaskListComponent
