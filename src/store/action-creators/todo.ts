import { ITodo, todoAction, todoActionTypes } from "../../types/todoTypes";

export const addTodo = (payload: ITodo): todoAction => {
    return {
        type: todoActionTypes.ADD_TODO,
        payload
    }
}

export const removeTodo = (payload: string): todoAction => {
    return {
        type: todoActionTypes.REMOVE_TODO,
        payload
    }
}

export const completeTodo = (payload: ITodo): todoAction => {
    return {
        type: todoActionTypes.COMPLETED_TODO,
        payload
    }
}