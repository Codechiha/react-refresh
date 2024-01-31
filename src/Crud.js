import { useState } from 'react';

//CRUD - Create, Read, Update, Delete State
// With the use of the React hook "useState"
// Shown Below
// const [variable to hold a state, function that alters the state]
// = useState(data type AND initial value of the State)

export const Crud = () => {
    //the onChange from input will be added to an array by button click and shown in h3
    const [inputTodo, setInputTodo] = useState("");

    const [todoList, setTodoList] = useState([]);

    const handleInputTodo = (event) => {
        setInputTodo(event.target.value)
    };

    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: inputTodo,
            completed: false
        }
        setTodoList([...todoList, task])
    };

    const deleteTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id))
    }

    const updateTask = (id) => {
        setTodoList(
            todoList.map((task) =>{
                if(task.id === id){
                    return {...task, completed: true}
                } else {
                    return task
                }   
            })
        )
    }

    return (
        <div>
            <h1>Component CRUD Basics - Create, Read, Update, Delete</h1>
            <div><input onChange={handleInputTodo}/>
            <button onClick={addTask}>Add Task</button></div>
            <div>
               {todoList.map((task) => {
                   return <div >
                            <h3 style={{color: task.completed ? 'green': 'black'}}>{task.taskName}</h3>
                            <button onClick={() => deleteTask(task.id)}>Delete</button>
                            <button onClick={() => updateTask(task.id)}>Compelte</button>
                          </div>
                })}
            </div>
        </div>
    )
}