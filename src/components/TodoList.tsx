import { useTypedSelector } from "../hooks/useTypeSelector";
import { BiMessageError } from 'react-icons/bi'
import { TodoItem } from "./TodoItem";
import { FC } from "react";

const TodoList: FC = () => {
    const { todos } = useTypedSelector(state => state.todo)

    return (
        <div>
            {
                todos.length ? (
                    todos.map((item) => <TodoItem key={item.id} {...item}/>)
                ) : (
                    <div className="empty">No todos found <BiMessageError/></div>
                )
            }
        </div>
    )
}

export { TodoList }