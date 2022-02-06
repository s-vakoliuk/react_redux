import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

import css from '../App.module.css';

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos);
    return (
        <div className={css.TodoList}>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                />
            ))}
        </div>
    );
};

export default TodoList;