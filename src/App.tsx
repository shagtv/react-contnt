import React, {useEffect, useState} from 'react';
import './App.css';
import InputField from "./components/InputField";

function App() {
  const [todo, setTodo] = useState("");

    useEffect(() => {
        fetch('https://shagtv.up.railway.app/api/content')
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(error => console.error(error));
    }, []);

  return (
    <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
