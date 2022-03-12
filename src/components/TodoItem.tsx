import { FC } from 'react'
import { MdOutlineChangeCircle } from 'react-icons/md'
import { ITodo } from '../types/todoTypes'
import { FiTrash } from 'react-icons/fi'
import { useAction } from '../hooks/useAction'

const TodoItem: FC<ITodo> = ({ id, title , completed }) => {
    const { removeTodo , completeTodo } = useAction()

    const deleteTodoHandler = (): void => {
        const isDelete = window.confirm('Are u sure?')

        if(!isDelete) return
        removeTodo(id)
    }   

    const completeTodoHandler = (): void => {
        completeTodo({ id , title , completed })
    }

    return (
        <div className={`todo ${completed && 'todo_active'}`}>
            <p>{title}</p>
            <div>
                <button onClick={completeTodoHandler}><MdOutlineChangeCircle/></button>
                <button onClick={deleteTodoHandler}><FiTrash/></button>
            </div>
        </div>
    )
}

export { TodoItem }