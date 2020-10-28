import * as types from '../../actionTypes'

const initialState = {
    todos: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_TODO_TASKS:
            return state;
        case types.ADD_TODO_TASK:

            return {
                todos: [...state.todos, action.payload]
            }
        case types.REMOVE_TODO_TASK:
            return {
                todos: state.todos.filter((todo, index) => index !== action.payload)
            }
        case types.EDIT_TODO_TASK:
            console.log("state.todos", state.todos);
            console.log("action.payload", action.payload);

            return {
                todos: state.todos.map((item, index) =>
                    index == action.payload.id ? action.payload.data : item
                )
            }
        default:
            return state;
    }
}