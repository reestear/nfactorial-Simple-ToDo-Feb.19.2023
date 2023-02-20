import React, { useState } from 'react'
import './styles.css'
import TRASH_IMG from './assets/trash.png'
import MOVEBACK_IMG from './assets/moveback.png'
import MORE_IMG from './assets/more.png'




export default function ToDo({id, active, text, done, MoveToTrash, DeleteForever, MoveBack, handleCheck}) {

    const [SpecsDisplay, setSpecsDisplay] = useState('none');
    let SpecsFirst = (active === 'active') ? 'flex' : 'none';
    let SpecsSecond = (active === 'trash') ? 'flex' : 'none';

    function handleOnClick(){
        SpecsDisplay = (SpecsDisplay === 'none') ? setSpecsDisplay('flex') : setSpecsDisplay('none');
    }

  return (
    <div className='ToDoMain'>
        <div className='CheckInput'>
            <button onClick={handleOnClick} className='ToDoButton'>
                <img alt='more' src={MORE_IMG}></img>
            </button>

            <label className='checking'>
                <input onClick={() => handleCheck(id)} type='checkbox' checked={(done) ? true : false} id='inp'></input>
                {text}
            </label>
        </div>

        <div className='Specs' style={{display: SpecsDisplay}}>
            <div className='Specs-First' style={{display: SpecsFirst}}>
                <button onClick={() => {MoveToTrash(id); setSpecsDisplay('none')}} className='Trash SpecsButton'>
                    <img alt='trash' src={TRASH_IMG}></img>
                    Move to Trash
                </button>
            </div>
            <div className='Specs-Second' style={{display: SpecsSecond}}>
                <button onClick={() => {DeleteForever(id); setSpecsDisplay('none')}} className='Delete SpecsButton'>
                    <img alt='trash' src={TRASH_IMG}></img>
                    Delete Forever
                </button>
                <button onClick={() => {MoveBack(id); setSpecsDisplay('none')}} className='MoveBack SpecsButton'>
                    <img alt = 'moveback' src={MOVEBACK_IMG}></img>
                    Move Back
                </button>
            </div>
        </div>
    </div>
  )
}
