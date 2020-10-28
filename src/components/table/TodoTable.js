import React from 'react'
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import TodoRow from './TodoRow';
import * as actions from '../../store/actions'

export default function TodoTable(props) {

    const todos = useSelector(state => state.todos.todos);

    const dispatch = useDispatch()

    const handleDelete = (index) => {
        dispatch(actions.removeTodo(index));
    }

    const handleEdit = (index, data) => {
        props.handleEdit(index, data);
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Target Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {todos
                    && todos.map((todo, index) =>
                        <TodoRow key={index}
                            value={todo}
                            index={index}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                        />)}
            </tbody>
        </Table>

    )
}
