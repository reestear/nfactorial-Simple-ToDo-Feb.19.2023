import React, { useState } from 'react'
import './styles.css'
import TRASH_IMG from './assets/trash.png'
import MOVEBACK_IMG from './assets/moveback.png'
import MORE_IMG from './assets/more.png'




export default function ToDo({id, active, text, done, MoveToTrash, DeleteForever, MoveBack, handleCheck}) {

    const [SpecsDisplay, setSpecsDisplay] = useState('none');
    const [bg, setBg] = useState();
    const [chosenBg, setChosenBg] = useState('none');
    

    let SpecsFirst = (active === 'active' || active === 'done') ? 'flex' : 'none';
    let SpecsSecond = (active === 'trash') ? 'flex' : 'none';

    function handleOnClick(){
        (SpecsDisplay === 'none') ? setSpecsDisplay('flex') : setSpecsDisplay('none');
        (SpecsDisplay === 'none') ? setChosenBg('#E4E6E7') : setChosenBg('transparent')
    }

  return (
    <div className='ToDoMain'>
        <div className='CheckInput'>
            <button onClick={handleOnClick} className='ToDoButton'>
                <img alt='more' src={MORE_IMG}></img>
            </button>

            <div className='checking' 
                style = 
                {{  backgroundColor: chosenBg, 
                    textDecorationLine: (done) ? 'line-through' : 'none'
                }}>
                <input onClick={() => handleCheck(id)} type='checkbox' checked={(done) ? true : false} id='inp'></input>
                {text}
            </div>
        </div>

        <div className='Specs' style={{display: SpecsDisplay}}>
            <div className='Specs-First' style={{display: SpecsFirst}}>
                <button onMouseEnter={() => setBg(0)} onMouseLeave={() => setBg(-1)} style={{backgroundColor: (bg === 0) ? 'rgba(8, 30, 52, 0.2)' : 'transparent'}} onClick={() => {MoveToTrash(id); setSpecsDisplay('none')}} className='Trash SpecsButton'>
                    <img alt='trash' src={TRASH_IMG}></img>
                    Move to Trash
                </button>
            </div>
            <div className='Specs-Second' style={{display: SpecsSecond}}>
                <button onMouseEnter={() => setBg(1)} onMouseLeave={() => setBg(-1)} style={{backgroundColor: (bg === 1) ? 'rgba(8, 30, 52, 0.2)' : 'transparent'}} onClick={() => {DeleteForever(id); setSpecsDisplay('none')}} className='Delete SpecsButton'>
                    <img alt='trash' src={TRASH_IMG}></img>
                    Delete Forever
                </button>
                <button onMouseEnter={() => setBg(2)} onMouseLeave={() => setBg(-1)} style={{backgroundColor: (bg === 2) ? 'rgba(8, 30, 52, 0.2)' : 'transparent'}} onClick={() => {MoveBack(id); setSpecsDisplay('none')}} className='MoveBack SpecsButton'>
                    <img alt = 'moveback' src={MOVEBACK_IMG}></img>
                    Move Back
                </button>
            </div>
        </div>
    </div>
  )
}
