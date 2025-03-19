import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Container } from 'react-bootstrap';

function Counter() {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <Container className='d-flex gap-3'>
                <Button onClick={() => dispatch({ type: 'INCREMENT' })}>+</Button>
                <Button onClick={() => dispatch({ type: 'DECREMENT' })}>-</Button>
            </Container>

        </div>
    );
}

export default Counter;