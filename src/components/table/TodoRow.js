import React from 'react'
import { Button } from 'react-bootstrap';


export default function TodoRow(props) {
    const todo = props.value;
    return (
        <tr>
            <td>{todo.desc}</td>
            <td>{todo.targetDate}</td>
            <td>
                <Button variant="warning" onClick={() => props.handleEdit(props.index, todo)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => props.handleDelete(props.index)}>Delete</Button>
            </td>
        </tr>
    )
}
