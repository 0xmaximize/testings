import React from 'react'
import { Input, Button, Container, Spacer } from '@nextui-org/react';

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
 
  return (
    <Container>
    <div style={{display:'flex', justifyContent:'space-around'}}>
      <Spacer y={1.5} />
        <p className={`${task.completed ? 'completed' : ""}`}
         onClick={() => toggleComplete(task.id)}>{task.task}</p>

        <Button auto color='error' size='xs' onClick={() => deleteTodo(task.id)}> 
       X</Button>
  
    </div>
    </Container>
  )
}