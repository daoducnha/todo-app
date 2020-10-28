import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import TodoInputFrom from '../form/TodoInputFrom'
import TodoTable from '../table/TodoTable'

export default function HomePage(props) {

    const [initData, setInitData] = useState(null)
    const [index, setIndex] = useState(0);

    const handleEdit = (index, data) => {        
        setInitData(data)
        setIndex(index);
    }

    return (
        <Container>
            <Container>
                <TodoInputFrom data={initData} index={index} />
            </Container>
            <br />
            <Container>
                <TodoTable data={props.data} handleEdit={(index, data) => handleEdit(index, data)} />
            </Container>
        </Container>
    )
}
