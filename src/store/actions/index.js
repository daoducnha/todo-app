import * as types from '../actionTypes';

export const addTodo = (data) => ({
    type: types.ADD_TODO_TASK,
    payload: data
})

export const removeTodo = (id) => ({
    type: types.REMOVE_TODO_TASK,
    payload: id
})

export const editTodo = (id, data) => ({
    type: types.EDIT_TODO_TASK,
    payload: {
        id: id,
        data: data
    }
})

export const loadData = () => ({
    type: types.LOAD_TODO_TASKS
})