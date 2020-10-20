import React, {useReducer} from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './App.css';
import { reducer, addItem, clearCompleted, toggleItem, initialState } from './reducers/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
const addTodo = (item) => dispatch({type: addItem, payload: item});
const clearComplete = () => dispatch({type: clearCompleted});
const toggleTodo = (id) => dispatch({type: toggleItem, payload: id});
  
    return (
     
      <div className="App">
      <header className="header">
        <p>Redux Reducer Todo App</p>
      </header>
      
      <TodoList state={state} toggleTodo={toggleTodo}/>
      <TodoForm addTodo={addTodo} clearComplete={clearComplete}/>
      </div>
    );
  
}

export default App;
