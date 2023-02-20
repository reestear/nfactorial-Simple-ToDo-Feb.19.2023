import React from 'react'
import ToDo from '../ToDo'

export default function ToDoList({filteredToDos, MoveToTrash, DeleteForever, MoveBack, handleCheck}) {

    // console.log("filtodos = " + filteredToDos)
    return (
        // <div className='Feature-List'>
        //     <ToDo></ToDo>
        //     <ToDo></ToDo>
        //     <ToDo></ToDo>
        //     <ToDo></ToDo>
        // </div>
        filteredToDos.map((todo) => <ToDo id = {todo.id} active = {todo.active} text = {todo.text} done={todo.done} MoveToTrash={MoveToTrash} DeleteForever={DeleteForever} MoveBack={MoveBack} handleCheck={handleCheck}></ToDo>)
    )
}
