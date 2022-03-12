export interface ITodo {
    title: string,
    id: string,
    completed: boolean
}

export interface ITodoArray {
    todos: any[]
}

export enum todoActionTypes {
    ADD_TODO = 'ADD_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
    COMPLETED_TODO = 'COMPLETED_TODO'
}

export interface addTodoAction {
    type: todoActionTypes.ADD_TODO,
    payload: ITodo
}

export interface removeTodoAction {
    type: todoActionTypes.REMOVE_TODO,
    payload: string
}

export interface changeTodoAction {
    type: todoActionTypes.COMPLETED_TODO,
    payload: ITodo
}

export type todoAction = addTodoAction | removeTodoAction | changeTodoAction