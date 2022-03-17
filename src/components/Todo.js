import React, {useState} from "react";
import TodoForm from "./TodoForm";


function Todo({todos, completeTodo, removeTodo, updateTodo}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return  <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
        
            <div className={todo.isComplete ? 'todo-row complete' :
            'todo-row'} key={index}>

                <div className="content-container" key={todo.id} onClick={() => completeTodo(todo.id)}>
                    <h1 className="title-tache">{todo.text}</h1>
                    <p className="content-tache">{todo.content}</p>
                </div>

                <div className="icons">

                    <div
                    onClick={ () => setEdit({ id: todo.id, value: todo.text }) }
                    className="edit">
                        Editer
                    </div>

                    <div
                    onClick={ () => removeTodo(todo.id) }
                    className="delete" >Supprimer</div>
                    
                </div>

            </div>
        
    ))

};

export default Todo;