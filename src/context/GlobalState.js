import React, { createContext, useEffect, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todostore'));
        if(todos) setTodos(todos);
    },[])

    useEffect(() => {
        localStorage.setItem('todostore',JSON.stringify(todos));
    },[todos])

    console.log(todos);


    return(<GlobalContext.Provider value={[todos, setTodos]}>
        {children}
    </GlobalContext.Provider>)
}

