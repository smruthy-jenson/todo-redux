import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addTodo, deleteTodo, toggleTodo } from '../REDUX/Reducer/todoReducer';


function Home() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const handleAddTodo = () => {
        if (text.trim() !== '') {
            dispatch(addTodo({
                id: Date.now(),
                text,
                completed: false,
            }));
            setText('');
        }
    };

    const handleDeleteTodo = id => {
        dispatch(deleteTodo(id));
    };

    const handleToggleTodo = id => {
        dispatch(toggleTodo(id));
    };
    return (
        <>

            <div className='d-flex align-items-center justify-content-center' style={{ width: '100%', height: '100vh' }}>
                <div className='d-flex flex-column border rounded p-5 border-success'>
                    <h2>MY TODO LIST</h2>
                    <div className='d-flex'>
                        <input style={{ width: '300px', height: '50px', paddingLeft: '10px' }}
                            type="text"
                            value={text}
                            onChange={e => setText(e.target.value)}
                            placeholder="Add Todo..."
                        />
                        <button style={{ width: '100px', height: '50px', backgroundColor: 'green', color: 'white',marginBottom:'20px' }} className='ms-2 btn' onClick={handleAddTodo}>SUBMIT</button>
                    </div>

                    <ul >
                            {todos.map(todo => (
                                <li style={{ listStyle: 'none' }} key={todo.id}>
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => handleToggleTodo(todo.id)}
                                    />
                                    <span className='box ms-5' style={{ textDecoration: todo.completed ? 'line-through' : 'none', color:'black' }}>{todo.text}</span>
                                    <button style={{ color: 'white' }} className='btn ms-5' onClick={() => handleDeleteTodo(todo.id)}><i style={{ color: 'red' }} className='fa-solid fa-trash me-2'></i>Delete</button>
                                </li>
                            ))}
                       
                    </ul>
                </div>
            </div>


        </>
    )
}

export default Home