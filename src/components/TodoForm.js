import React, {useState} from 'react';

function TodoForm(props) {
    const [text, setText] = useState(props.edit ? props.edit.value : '');
    const [content, setContent] = useState('');

    const handleChangeText = e => {
        setText(e.target.value);
    };

    const handleChangeContent = e => {
        setContent(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: text,
            content: content,
        });

        setText('');
        setContent('');
    };

    return (
        <div className='form-container'>
            <form className="todo-form" onSubmit={handleSubmit}>

                {props.edit ? ( <><input
                        type="text"
                        placeholder="Modifier la tâche"
                        value={text}
                        name="text"
                        className="todo-input-title"
                        onChange={handleChangeText}
                    />

                    <input
                        type="text"
                        placeholder="Contenu de la tâche"
                        value={content}
                        name="content"
                        className="todo-input-content"
                        onChange={handleChangeContent}
                    />

                    <button className="todo-button">Modifier la tâche</button> </>) :
                    (<><input
                    type="text"
                    placeholder="Titre de la tâche"
                    value={text}
                    name="text"
                    className="todo-input-title"
                    onChange={handleChangeText}
                    />
                    <input
                    type="text"
                    placeholder="Contenu de la tâche"
                    value={content}
                    name="content"
                    className="todo-input-content"
                    onChange={handleChangeContent}
                    />

                    <button className="todo-button">Ajouter une tâche</button> </>)
                }


            </form>
        </div>
    );
}

export default TodoForm;