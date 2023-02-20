import React, { useState } from 'react'
import './styles.css'
import ADD_IMG from './assets/plus.png'

export default function NewTodo({onChangeText, text, AddToDo, handleEnter}) {

    const [vis, setVis] = useState('hidden');

    function handlePlus(){
        setVis((vis == 'hidden' ? 'visible' : 'hidden'));
    }

  return (
    <div className='NewTodoMain'>
        <div className='NewTodoWindow' style={{visibility: vis}}>
            <div>
                <p style={{fontWeight: '600', padding: 0, margin: 0, marginTop: '25px', marginLeft: '15px'}}>Add New To Do</p>
            </div>
            <div>
                <input onKeyDown={handleEnter} onChange={onChangeText} value={text} className='NewTodoInput' placeholder='Your Text'></input>
            </div>
            <div>
                <button onClick={AddToDo} className='NewTodoAdd'>Add</button>
            </div>
        </div>
        <button onClick={handlePlus} className='NewTodoPlus'>
            <img alt='add' src={ADD_IMG}></img>
        </button>
    </div>
  )
}
