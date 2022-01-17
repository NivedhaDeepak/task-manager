import React, { useState, useContext, useEffect, useRef } from 'react';
import {GlobalContext} from '../../context/GlobalState';
import './form.css';
//import formatDate from '../../utils/formatDate';

const Form = () => {
    const [todoName, setTodoName] = useState('');
    const [todos, setTodos] = useContext(GlobalContext);
    const [todoPriority, setTodoPriority] = useState('first');
   // const [todoDate, setTodoDate] = useState(formatDate(new Date()));
    const todoInput = useRef();

    /* const d = new Date();
    const day = d.getDate();
    const month = d.getMonth()+1;
    const year = d.getFullYear();
    console.log({day, month, year});
 */
    const submitHandler = (e) => {
        e.preventDefault();
        const newTodos = [...todos, {todoName, complete: false, todoPriority}];
        setTodos(newTodos);
        setTodoName('');
        setTodoPriority('first'); //TODO: check why it's not changing
        todoInput.current.focus();
    }
    
    useEffect(() => {
        setTodoName('');
        setTodoPriority('first'); //TODO: check why it's not changing
        todoInput.current.focus();
    },[])

    return (
        <form onSubmit={submitHandler} className='form'>
            <input type="text" value={todoName} ref={todoInput} placeholder='What needs to be done?' onChange={(e) => setTodoName(e.target.value)} />
            <select value={todoPriority} onChange={(e) => setTodoPriority(e.target.value)}>
                <option value="first">Urgent And Important</option>
                <option value="second">Not Urgent But Important</option>
                <option value="third">Urgent But Not Important</option>
                <option value="fourth">Not Urgent And Not Important</option>
            </select>
            {/* <input type="date" value={todoDate} onChange={(e) => setTodoDate(e.target.value)}/> */}
            <button>Create</button>
        </form>
    )
}

export default Form
