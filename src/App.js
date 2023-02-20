import logo from './logo.svg';
import './App.css';
import FeatureButton from './Components/FeatureButton';
import ToDo from './Components/ToDo';
import NewTodo from './Components/NewTodo';

function App() {
  return (
    <div className="App">
      <div className='Top'>
        <div>
          <div className='Header pd13'>
            <h1>Simple To Do List</h1>
            <p>Today is awesome day. The weather is awesome, you are awesome too!</p>
          </div>

          <div className='Feature-Buttons pd13'>
            <FeatureButton></FeatureButton>
            <FeatureButton></FeatureButton>
            <FeatureButton></FeatureButton>
          </div>
        </div>
        
        <NewTodo></NewTodo>

      </div>

      <h2 className='pd13' style={{paddingTop: '12px'}}>Some</h2>
      <div className='pd13' style={{width: '94%', height: '3px', backgroundColor: '#151517', opacity: '0.2', marginBottom: '24px', marginTop: '12px'}}></div>

      <div className='Feature-List'>
        <ToDo></ToDo>
        <ToDo></ToDo>
        <ToDo></ToDo>
        <ToDo></ToDo>
        <ToDo></ToDo>
      </div>

    </div>
  );
}

export default App;
