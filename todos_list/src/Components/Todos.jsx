import React from 'react'
import TodoItem from "./TodoItem";

function Todos(props) {
    return (
        <div className='container'>
            <h3>Todos works</h3>
            {/* {props.todos} */}
            
            <TodoItem todo={props.todo[0]}/>
        </div>
    )
}

export default Todos