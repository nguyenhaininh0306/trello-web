import React from 'react'
import Task from '../Task/Task'
import './Column.scss'

const Column = () => {
  return (
    <div className='columns'>
      <header>Brainstorm</header>
      <ul className='task-list'>
        <Task />
        <li className='task-item'>Add what you want to work on below</li>
        <li className='task-item'>Add what you want to work on below</li>
        <li className='task-item'>Add what you want to work on below</li>
        <li className='task-item'>Add what you want to work on below</li>
        <li className='task-item'>Add what you want to work on below</li>
        <li className='task-item'>Add what you want to work on below</li>
      </ul>
      <footer>Add another card</footer>
    </div>
  )
}

export default Column
