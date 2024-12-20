import { useState } from 'react';
import './App.css';
import { FaTrash, FaEdit } from 'react-icons/fa';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState(""); 
  const [editTodoIndex, setEditTodoIndex] = useState(null);
  const [filter, setFilter] = useState("all"); 
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };
  const handleSearchChange = (e) => { 
    setSearchTerm(e.target.value);
  };


  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
  };
  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;  
    if (editTodoIndex !== null) {
 
      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex].text = newTodo; 
      setTodos(updatedTodos);
      setEditTodoIndex(null);  
    } else {
      setTodos([...todos, { text: newTodo, completed: false }]);  
    }
    setNewTodo("");  
  };


const handleClearAll = () =>{
    setTodos([]);
}

  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };


  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.text.toLowerCase().includes(searchTerm.toLowerCase());
    if (!matchesSearch) return false;
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed; 
    return true;
  });

  



  return (
    <>
      <div className="modal-bg">
        <div className="modal">
          <h2>Are you sure you want to clear all the data?</h2>
          <div className="choice">
            <button className="cleard">Clear</button>
            <button className="cancel">Cancel</button>
          </div>
        </div>
      </div>

      <div className="edit-bg">
        <div className="modal">
          <h2>Edit</h2>
          <input type="text" className="editing" />
          <div className="choice">
            <button className="save">Save</button>
            <button className="cancel-edit">Cancel</button>
          </div>
        </div>
      </div>

      <h1>To Do App</h1>

      <div className="container">
        <div className="buttons">
          <button className="all" onClick={() => handleFilterChange("all")}>All To Dos</button>
          <button className="completed" onClick={() => handleFilterChange("completed")}>All Completed To Dos</button>
          <button className="pending" onClick={() => handleFilterChange("pending")}>All Pending To Dos</button>
          <button className="clear" onClick={handleClearAll}>Clear All</button>
        </div>
        <div className="search">
          <input
            type="text"
            className="search-input"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search todos"
          />
        </div>

        <div className="box">
          <div className="adding">
            <input
              type="text"
              className="todo"
              value={newTodo}
              onChange={handleInputChange}
              placeholder="Enter a new todo"
            />
            <button className="add" onClick={handleAddTodo}>ADD</button>
          </div>
        </div>
        
        
        <hr />

        <div className="added">
          {filteredTodos.map((todo, index) => (
            <div className="block" key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(index)}
              />
              <h2 style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </h2>
              <div className="icons">
              <FaEdit onClick={() => {
                setNewTodo(todo.text);  
                setEditTodoIndex(index);  
              }} className="edit" />
                <FaTrash
                  className="delete-icon"
                  onClick={() => handleDeleteTodo(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;