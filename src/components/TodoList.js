import React from 'react';
import {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]) //set the state

    const addTodo = todo => {
        //if you type a space or empty string, nothing should happen to todo
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos ]

        setTodos(newTodos)
    };


    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setTodos(prev => prev.map (item => (item.id === todoId ? newValue : item)))
   };



    const removeTodo = id => {
         const removeArr = [...todos].filter(todo => todo.id !== id)

         setTodos(removeArr); //check in the array the todo and remove
    };

   
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete //toggling between true and false
            }
            return todo
        })
        setTodos(updatedTodos);
    }


    return (
        <div>
          <h1>What's the Plan for today?</h1>  
          <TodoForm onSubmit={addTodo}/>  {/* pass in todo form */}
          <Todo 
          todos = {todos} 
          completeTodo = {completeTodo} 
          removeTodo = {removeTodo} 
          updateTodo = {updateTodo}/>
        </div>
    )
}

export default TodoList
