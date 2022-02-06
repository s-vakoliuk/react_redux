const TodoForm = ({ value, updateText, handleAction }) => {
    return (
        <label>
            <input
                placeholer='new todo'
                value={value}
                onChange={(event) => updateText(event.target.value)}
            />
            <button onClick={handleAction}>Add to do</button>
        </label>
    );
};

export default TodoForm;