import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './listItem.css';

const ListItem = ({todo, todoName, handleEditValue, id, toggleComplete}) => {
    const [edit, setEdit] = useState(false);
    const [editValue, setEditValue] = useState(todo.todoName);
    const [todos, setTodos] = useContext(GlobalContext);

    const editHandler = () => {
        setEdit(true);
    }

    const saveHandler = () => {
        setEdit(false);
        if(editValue){
            handleEditValue(editValue, id);
           // console.log({editValue, id});
        }else{
            setTodos(todos);
        }
    }

    if(edit) {
        return (
            <li className='list-items'>
                <label>
                    <input type="text" value={editValue} onChange={(e) => {setEditValue(e.target.value)}} />
                </label>
                <button type="submit" onClick={saveHandler}>Save</button>
            </li>
            )
    } else {
        return(
        <li className='list-items'>
            <label className={todo.complete ? 'active' : ''}>
                <input type="checkbox" onChange={toggleComplete} checked={todo.complete} onChange={() => {toggleComplete(id)}}/>
                {todoName}
            </label>
            <button disabled={todo.complete} onClick={editHandler}>Edit</button>
        </li>
        )
    }
    

}

export default ListItem
