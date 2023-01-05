import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TODO } from './models';
import { DataStore } from '@aws-amplify/datastore';
import { 
  TODOCreateForm 
} from './ui-components';
import { TODOCreateFormInputValues } from './ui-components/TODOCreateForm';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";





function App({ signOut }:{ signOut:any}) {

  let [todos, setTodos] = React.useState<TODO[]>([])

  const getTodos = async () => {
    const models = await DataStore.query(TODO);
    setTodos(models);
  }

 

  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
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
    </View>
  );
}

export default withAuthenticator(App);