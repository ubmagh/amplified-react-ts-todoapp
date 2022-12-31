import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TODO } from './models';
import { DataStore } from '@aws-amplify/datastore';
import { 
  TODOCreateForm 
} from './ui-components';
import { TODOCreateFormInputValues } from './ui-components/TODOCreateForm';



function App() {

  let [todos, setTodos] = React.useState<TODO[]>([])

  const getTodos = async () => {
    const models = await DataStore.query(TODO);
    setTodos(models);
  }

 

  return (
    <div className="App">
      <header className="App-header">
        Hello there ! 
        <main style={{ width: "80%", padding: "O% 10%", textAlign :"left", backgroundColor: "white"  }}>
        <div>
          <TODOCreateForm  />
        </div>
        <div style={{ margin: "10px", textAlign: "center" }}>
          <button onClick={getTodos}>Get Todos</button>
        </div>
      </main>
      <hr/>
      <main style={{ width: "80%", padding: "O% 10%", textAlign :"left", backgroundColor: "white", color: "black"  }}>
        <div>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                {todo.name} - {todo.description} - {todo.completed} - {todo.date}
              </li>
            ))}
          </ul>
        </div>
      </main>
      </header>
      
    </div>
  );
}

export default App;
