import React from 'react'
import {useState, useEffect, useRef} from 'react' //hooks

function TodoForm(props) {
    const[input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus() //focus on whatever input text you are working with
    })

    const handleChange = e => {
        setInput(e.target.value) //set input to what we type in
    }

    const handleSubmit = e => {
        e.preventDefault(); //we don't want the "add to do" button to keep refreshing after submitting
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');

    };


    return (
        <form className = 'todo-form' onSubmit = {handleSubmit}> 
            {props.edit ? (
            <>
            <input 
                type = 'text' 
                placeholder = 'Update your todo list' 
                value = {input} 
                name = 'text' 
                className = 'todo-input edit' 
                onChange = {handleChange}
                ref = {inputRef}
            />
            <button className = 'todo-button edit '>Update</button>
            </>

            ) : (
            <>
            <input 
                type = 'text' 
                placeholder = 'Add a todo' 
                value = {input} 
                name = 'text' 
                className = 'todo-input' 
                onChange = {handleChange}
                ref = {inputRef}
            />
            <button className = 'todo-button'>Add todo</button>
            </>
            )}
 
        </form>
    );
}

export default TodoForm;
