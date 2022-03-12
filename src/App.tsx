import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import './scss/styles.scss'

const App = () => {
    return (
        <div className='root'>
            <TodoForm/>
            <TodoList/>
        </div>
    )
};

export { App };
