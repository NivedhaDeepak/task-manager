import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

import './matrix.css';

const Matrix = () => {

    const [todos, setTodos] = useContext(GlobalContext);

    const first = todos.filter(todo => todo.todoPriority === 'first');
    const second = todos.filter(todo => todo.todoPriority === 'second');
    const third = todos.filter(todo => todo.todoPriority === 'third');
    const fourth = todos.filter(todo => todo.todoPriority === 'fourth');

    console.log({first, second, third, fourth});
    console.log('first tasks log',  first.map(todo => todo.todoName));
    return (
        <div className='prioritized-tasks'>
                  <div className='urgency'>
                         <div>Urgent</div>
                         <div>Not Urgent</div>
                     </div>    
            <div className='importance'>
                <div>Important</div>
                <div>Not Important</div>
            </div>
            
            <div className="first-row">
                {/* <span className="test2">Important</span> */}
                <div className="first-tasks">
                    <ol>
                        {first.map(todo => (
                            <li>{todo.todoName}</li>
                            ))}
                    </ol>
                </div>
                <div className="second-tasks">
                {/* <p>Not Urgent</p> */}
                    <ol>
                        {second.map(todo => (
                            <li>{todo.todoName}</li>
                        ))}
                    </ol>
                </div>
            </div>
            
            <div className="second-row">
                <div className="third-tasks">
                    <ol>
                        {third.map(todo => (
                            <li>{todo.todoName}</li>
                        ))}
                    </ol>
                </div>
                <div className="fourth-tasks">
                    <ol>
                        {fourth.map(todo => (
                            <li>{todo.todoName}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Matrix
 

