import logo from './logo.svg';
import './App.css';
import FeatureButton from './Components/FeatureButton';
import ToDo from './Components/ToDo';
import NewTodo from './Components/NewTodo';
import Todos from './assets/InitialToDos.js'
import { useEffect, useState } from 'react';
import ToDoList from './Components/ToDoList';

function App() {

  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState();
  const [mounted, setMounted] = useState(true);
  const [Wind, setWind] = useState();
  const [text, setText] = useState();
  
  useEffect(() => {
    // const temp = JSON.parse(localStorage.getItem('arr'));
    setTodos(JSON.parse(localStorage.getItem('arr')) || Todos);
    setFilteredTodos(JSON.parse(localStorage.getItem('filtered_arr')) || Todos);
    setStatus(JSON.parse(localStorage.getItem('stat')) || 'active');
    setWind(JSON.parse(localStorage.getItem('wind')) || 'To Do');
    setText(JSON.parse(localStorage.getItem('txt')) || '');

    // setStatus('active')

    // if(temp == null) setFilteredTodos(Todos.filter((todo) => todo.active === 'active'));
    // else setFilteredTodos(temp.filter((todo) => todo.active === 'active'));

    // if(JSON.parse(localStorage.getItem('arr'))) setTodos(JSON.parse(localStorage.getItem('arr')));
    // if(JSON.parse(localStorage.getItem('filtered_arr'))) setFilteredTodos(JSON.parse(localStorage.getItem('filtered_arr')));
  }, [mounted])

  useEffect(() => {
    console.log('again')
    localStorage.setItem('arr', JSON.stringify(todos));
    localStorage.setItem('filtered_arr', JSON.stringify(filteredTodos));
    localStorage.setItem('stat', JSON.stringify(status));
    localStorage.setItem('wind', JSON.stringify(Wind));
    localStorage.setItem('txt', JSON.stringify(text));
  }, [todos, filteredTodos, status, Wind, text])

  // console.log(todos);
  // console.log(filteredTodos);

  function showActive(){
    // console.log('active clicked')

    setFilteredTodos(todos.filter(todo => todo.active === 'active'));
    setStatus('active')
    setWind('To Do')
  }

  function showDone(){
    // console.log('done clicked')

    setFilteredTodos(todos.filter(todo => todo.active === 'done'));
    setStatus('done')
    setWind('Done')
  }

  function showTrash(){
    // console.log('trash clicked')

    setFilteredTodos(todos.filter(todo => todo.active === 'trash'));
    setStatus('trash')
    setWind('Trash')
  }

  function MoveToTrash(id){
    // console.log("movetotrash has been pressed")
    // console.log('its id is ' + id)
    const todo = todos.find((item) => item.id === id);
    todo.active = 'trash';

    setFilteredTodos(todos.filter((item) => item.active === status))
  }

  function DeleteForever(id){
    const todo = todos.find((item) => item.id === id);
    let new_todos = todos.filter((item) => item != todo)
    setTodos(new_todos);
    setFilteredTodos(new_todos.filter((item) => item.active === status))
  }

  function MoveBack(id){
    // console.log('move back is pressed')
    const todo = todos.find((item) => item.id === id);
    todo.active = (todo.done) ? 'done' : 'active';

    setFilteredTodos(todos.filter((item) => item.active === status))
  }

  function handleCheck(id){
    // console.log('chackbox is pressed')
    const todo = todos.find((item) => item.id === id);
    todo.done = !todo.done;
    if(todo.active === 'active') todo.active = 'done';
    else if(todo.active === 'done') todo.active = 'active';

    setFilteredTodos(todos.filter((item) => item.active === status))
  }

  function handleEnter(e){
    if(e.key === 'Enter') AddToDo();
  }

  function AddToDo(){
    // console.log('add to do has been pushed')
    if(text === '') return;

    const todo = {
        id: todos.length,
        active: 'active',
        text: text,
        done: false
    }
    setText('')
    let new_todos = [todo, ...todos];
    setTodos(new_todos);
    setFilteredTodos(new_todos.filter((item) => item.active === status))
  }

  function onChangeText(e){
    setText(e.target.value);
    // console.log(text)
  }

  return (
    <div className="App">
      <div className='Main'>
        <div className='Top'>
          <div>
            <div className='Header pd13'>
              <h1>Simple To Do List</h1>
              <p>Today is awesome day. The weather is awesome, you are awesome too!</p>
            </div>

            <div className='Feature-Buttons pd13'>
              <FeatureButton title = "To Do" color = {(status === 'active') ? true : false} filterUpdate = {showActive}></FeatureButton>
              <FeatureButton title = "Done" color = {(status === 'done') ? true : false}  filterUpdate = {showDone}></FeatureButton>
              <FeatureButton title = "Trash" color = {(status === 'trash') ? true : false}  filterUpdate = {showTrash}></FeatureButton>
            </div>
          </div>
          
          <NewTodo onChangeText={onChangeText} text={text} AddToDo={AddToDo} handleEnter={handleEnter}></NewTodo>

        </div>

        <h2 className='pd13' style={{paddingTop: '12px'}}>{Wind}</h2>
        <div className='pd13' style={{width: '94%', height: '3px', backgroundColor: '#151517', opacity: '0.2', marginBottom: '24px', marginTop: '12px'}}></div>

        <ToDoList filteredToDos = {filteredTodos} MoveToTrash={MoveToTrash} DeleteForever={DeleteForever} MoveBack={MoveBack} handleCheck={handleCheck}></ToDoList>
      </div>
      
      <p className='pd13' style={{marginBottom: '50px'}}>Made with 🖤 at nFactorial in 2022.</p>

    </div>
  );
}

export default App;
