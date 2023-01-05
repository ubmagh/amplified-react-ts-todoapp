import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TODO } from './models';
import { 
  TODOCreateForm 
} from './ui-components';
import { TODOCreateFormInputValues } from './ui-components/TODOCreateForm';
import { Amplify, Auth } from 'aws-amplify';
import config from './aws-exports';
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
  Flex,
  Text,
  TextField,
  Icon,
} from "@aws-amplify/ui-react";
import { listTODOS } from "./graphql/queries";
import {
  createTODO as createTODOMutation,
  deleteTODO as deleteTODOMutation,
} from "./graphql/mutations";
import { API } from "aws-amplify";

export const signOut = () => {
  Auth.signOut()
  .then(data => console.log(data))
  .catch(err => console.log(err));
}

Amplify.configure(config);



function App({}) {

  let [todos, setTodos] = React.useState<TODO[]>([])
  let [userdata, setUserdata] = React.useState<any>(null)

  React.useEffect(() => {
    fetchTodos();
    getCurrentUser();
  }, []);

  async function fetchTodos() {
    const apiData:any = await API.graphql({ query: listTODOS });
    const notesFromAPI = apiData.data.listTODOS.items;
    setTodos(notesFromAPI);
  }

  async function createTodo(form:TODOCreateFormInputValues) {
    const data = {
      name: form.name,
      description: form.description,
      completed: form.completed,
      date: form.date,
    };
    await API.graphql({
      query: createTODOMutation,
      variables: { input: data },
    });
    fetchTodos();
  }

  async function deleteTODO({ id }:{id:any}) {
    console.log(id);
    const newNotes = todos.filter((todo:any) => todo.id !== id);
    setTodos(newNotes);
    await API.graphql({
      query: deleteTODOMutation,
      variables: { input: { id } },
    });
  }


  function handleFormSubmit(form:TODOCreateFormInputValues){
    createTodo(form);

    return {
      name: "",
      description: "",
      completed: false,
      date: "",
    };
  }

  function getCurrentUser():any{
    Auth.currentAuthenticatedUser().then((user) => {
      setUserdata(user.username)
    }
    ).catch((err) => {
    }
    );
  }


  return (
    <View className="App">
      <Card>
        <Heading level={1}> You're authenticated as : { userdata } </Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    <div className="App">
      <header className="App-header">
        Hello there ! 
        <main style={{ width: "80%", padding: "O% 10%", textAlign :"left", backgroundColor: "white"  }}>
        <div>
          <TODOCreateForm onSubmit={handleFormSubmit} />
        </div>
        <div style={{ margin: "10px", textAlign: "center" }}>
          <button onClick={fetchTodos}>Get Todos</button>
        </div>
      </main>
      <hr/>
      <Heading level={2} color={"white"}>Current Todos : </Heading>
      <main style={{ width: "80%", padding: "O% 10%", textAlign :"left", backgroundColor: "white", color: "black"  }}>
      <View margin="3rem 0">
        {todos.map((todo) => (
          <Flex
            key={todo.id || todo.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {todo.name}
            </Text>
            <Text as="span">{todo.description}</Text>
            { todo.completed? "✔": "❌" }
            <Button variation="link" onClick={() => deleteTODO(todo)}>
              Delete todo
            </Button>
          </Flex>
        ))}
      </View>
      </main>
      </header>
      
    </div>
    </View>
  );
}

export default withAuthenticator(App);