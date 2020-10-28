import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions'

export default function TodoInputFrom(props) {
    const dispatch = useDispatch();

    const [desc, setDesc] = useState("")
    const [targetDate, setTargetDate] = useState("")

    const handleClick = (event) => {
        
        props.data
            ? dispatch(actions.editTodo(props.index, { desc: desc, targetDate: targetDate }))
            : dispatch(actions.addTodo({ desc: desc, targetDate: targetDate }))
        props.data = null
    }

    console.log("props.data", props.data)
    return (
        <Form>
            <Form.Group controlId="fromDesc">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" defaultValue={props.data ? props.data.desc : ""} placeholder="Enter Description" onChange={(event) => setDesc(event.target.value)} />
            </Form.Group>
            <Form.Group controlId="fromTargetDate">
                <Form.Label>Target Date</Form.Label>
                <Form.Control type="date" defaultValue={props.data ? props.data.targetDate : ""} placeholder="Target Date" onChange={(event) => setTargetDate(event.target.value)} />
            </Form.Group>
            <Button variant="primary" type="button" onClick={handleClick}>Submit</Button>
        </Form>
    )
}
