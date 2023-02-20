import React from 'react'
import './styles.css'
import TRASH_IMG from './assets/trash.png'
import MOVEBACK_IMG from './assets/moveback.png'
import MORE_IMG from './assets/more.png'

export default function ToDo() {
  return (
    <div className='ToDoMain'>
        <div className='CheckInput'>
            <button className='ToDoButton'>
                <img alt='more' src={MORE_IMG}></img>
            </button>

            <label className='checking'>
                <input type='checkbox' id='inp'></input>
                Some ToDo to do
            </label>
        </div>

        <div className='Specs' style={{display: 'flex'}}>
            <div className='Specs-First'>
                <button className='Trash SpecsButton'>
                    <img alt='trash' src={TRASH_IMG}></img>
                    Move to Trash
                </button>
            </div>
            <div className='Specs-Second'>
                <button className='Delete SpecsButton'>
                    <img alt='trash' src={TRASH_IMG}></img>
                    Delete Forever
                </button>
                <button className='MoveBack SpecsButton'>
                    <img alt = 'moveback' src={MOVEBACK_IMG}></img>
                    Move Back To To Do
                </button>
            </div>
        </div>
    </div>
  )
}
