import React from 'react'
import './styles.css'
import ADD_IMG from './assets/plus.png'

export default function NewTodo() {
  return (
    <div className='NewTodoMain'>
        <div className='NewTodoWindow' style={{visibility: 'visible'}}>
            <div>
                <p style={{fontWeight: '600', padding: 0, margin: 0, marginTop: '25px', marginLeft: '15px'}}>Add New To Do</p>
            </div>
            <div>
                <input className='NewTodoInput' placeholder='Your Text'></input>
            </div>
            <div>
                <button className='NewTodoAdd'>Add</button>
            </div>
        </div>
        <button className='NewTodoPlus'>
            <img alt='add' src={ADD_IMG}></img>
        </button>
    </div>
  )
}
