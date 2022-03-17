import React, {useState} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList(){
    const [todos, setTodos] = useState([]);

    const addToDo = todo => {

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        setTodos(prev => prev.map(item =>(item.id === todoId ? newValue : item)));
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };



    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });

        setTodos(updatedTodos);
    }

    return  (
        <div className='todo-form-container'>
            <h1 className="title-header">Les tâches d'aujourdhui:</h1>
            <TodoForm onSubmit={addToDo} />
            <div className="grid">
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
            </div>
        </div>
    );
}

export default TodoList;