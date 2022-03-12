import { FC } from "react";
import { useAction } from "../hooks/useAction";
import { useInput } from "../hooks/useInput";

const TodoForm: FC = () => {
    const { addTodo } = useAction()
    const todoInput = useInput('')

    const addTodoHandler = (): void => {
        if(todoInput.getValue().trim().length){
            const body = {
                title: todoInput.getValue(),
                id: new Date().toISOString(),
                completed: false
            }
            addTodo(body)
            todoInput.cleaner()
        }else{
            alert("Fill the input!!")
        }
    }

    return (
        <div className="form">
            <input placeholder="Enter title" type="text" {...todoInput.bind()}/>
            <button onClick={addTodoHandler}>{'confirm'.toUpperCase()}</button>
        </div>
    )
}

export { TodoForm }