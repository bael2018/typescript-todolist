import { ITodoArray, todoAction, todoActionTypes } from "../../types/todoTypes";

const initialState: ITodoArray = {
    todos: []
}

export const todoReducer = (state = initialState , action: todoAction): ITodoArray => {
    switch (action.type) {
        case todoActionTypes.ADD_TODO:
            return {
                ...state,
                todos: [action.payload , ...state.todos]
            }
        case todoActionTypes.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== action.payload)
            }
        case todoActionTypes.COMPLETED_TODO:
            const toggledTodo = state.todos.map(item => item.id === action.payload.id ? 
            { ...action.payload , completed: !action.payload.completed } : item)
            return {
                ...state,
                todos: toggledTodo
            }
        default:
            return state;
    }
}