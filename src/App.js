import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";
import ReporterTodoForm from "./components/ReporterTodoForm";
import Login from "./components/Login";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("notStarted");
  const [searchUsers, setSearchUsers] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  const Status = {
    notStarted: "notStarted",
    process: "process",
    done: "done",
    all: "all",
  };
  const [status, setStatus] = useState(Status.notStarted);

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")))
  }, []);

  return (
    <div className="App">
      <h1>Demo Project</h1>
      <ReporterTodoForm
        searchUsers={searchUsers}
        setSearchUsers={setSearchUsers}
        date={date}
        setDate={setDate}
        title={title}
        setTitle={setTitle}
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
        search={search}
        setSearch={setSearch}
      />
      {/* <Login
      currentUser={currentUser}
      setCurrentUser={setCurrentUser}
      ></Login> */}

      {/* <TodoForm   
      todos={todos} setTodos={setTodos}
       inputText={inputText} setInputText={setInputText}
       value1={value1} setValue1={setValue1}
       value2={value2} setValue2={setValue2}
      filterStatus={filter} setFilterStatus={setFilter}
       /> */}

      {/* <TodoList 
      todos= {todos} setTodos={setTodos} 
      inputText={inputText} setInputText={setInputText}
      status={status} setStatus={setStatus} 
      Status={Status} 
      search={search} setSearch={setSearch}
      filterStatus={filter} setFilterStatus={setFilter}
      />  */}
    </div>
  );
}

export default App;