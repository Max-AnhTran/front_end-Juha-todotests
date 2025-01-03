import { useState }  from 'react';
import './App.css';
import TodoTable from './TodoTable';
import { Todo } from './types';

function App() {
  const [todo, setTodo] = useState<Todo>({description: '', date: ''});
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({description: '', date: ''});
  }

  const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  } 

  return (
    <div className="App">
      <h3>My Todolist</h3>
      <input 
        type="text" 
        placeholder="Description" 
        name="description" 
        value={todo.description} 
        onChange={inputChanged} />
      <input 
        type="text" 
        placeholder="Date" 
        name="date" 
        value={todo.date} 
        onChange={inputChanged} />
      <button onClick={addTodo}>Add</button>
      <TodoTable todos={todos} />
    </div>
  );
}

export default App;
