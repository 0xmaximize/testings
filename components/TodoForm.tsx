import React, {useState} from 'react'
import { Input, Button, Container, Spacer } from '@nextui-org/react';
import styles from "../styles/Todo.module.css";
 
export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <Container>
    
    <form onSubmit={handleSubmit}>
      <div className={styles.form}>
    <Input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='submit your details' />
    <Spacer  y={0.5} />
    <Button auto type="submit" className='todo-btn'>Submit</Button>
    
    </div>
    <Spacer  y={0.5} />
  </form>

  </Container>
  )
}
