import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import ListItem from '../listItem/ListItem';
import './list.css';

const List = () => {

    const [todos, setTodos] = useContext(GlobalContext);

    const toggleComplete = (id) => {
        const newTodos = [...todos];
        newTodos.map((todo, index) => {
            if(index === id){
                todo.complete = !todo.complete;
            }
        })
        setTodos(newTodos);
       // console.log({newTodos});
    }

    const handleEditValue = (editValue, id) => {
      // console.log({editValue, id});
      const newTodos = [...todos];
      newTodos.map((todo, index) => {
          if(index === id){
             todo.todoName = editValue;
          }
      })
      setTodos(newTodos);
    }

    return (
        <div>
            <ul className='list-container'>
            {todos.map((todo, index) => (
                <ListItem todo={todo} key={index} id={index} todoName={todo.todoName} 
                complete={todo.complete} toggleComplete={toggleComplete} 
                handleEditValue={handleEditValue}/> 
            ))}
            </ul>
        </div>
    )
}

export default List

