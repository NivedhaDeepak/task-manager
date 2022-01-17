import React, { useState,useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import happy from '../../img/happy.png'
import './footer.css';

const Footer = () => {

    const [todos, setTodos] = useContext(GlobalContext);
    const [checkAll, setCheckAll] = useState(false);

    const deleteHandler = () => {
        const newTodos=[...todos];
        const filteredTodos = newTodos.filter(todo => todo.complete === false);
        setTodos(filteredTodos);
        /* console.log({filteredTodos, newTodos});
        console.log('inside del handler');
        console.log({filteredTodos}); */
    }

    const handleAll = () => {
        const newTodos = [...todos];
        newTodos.forEach(
            (todo) => todo.complete = !checkAll 
        )
        setTodos(newTodos);
        setCheckAll(!checkAll);
        console.log({newTodos});
    }

    const todosLength = () => {
        return todos.filter(todo => todo.complete === false)
    }

    //console.log(todos.filter(todo => todo.complete === false));

    return (
        <div className='footer-container'>

{ todos.length === 0 ? 
            <div className='congrats-msg'>
            <h2>Great Job!! You completed all your tasks today!</h2>
            <img src={happy} alt="happy" width="400px" height="400px"/>
            </div>
               : 
               <>
               <label>
               <input type="checkbox" onChange={handleAll} checked={checkAll}/>
               Select All
           </label>
           <p>You have {todosLength().length} things to do!</p>
           <button type="submit" onClick={deleteHandler}>Delete</button>
           </>
            }
        </div>
    )
}

export default Footer