import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '../UI/Button/Button';
const Todo = ({ saveTodo }) => {
    const [value, setValue] = useState('');
    return (
    <form
      onSubmit={event => {
      event.preventDefault();
      saveTodo(value);
      setValue('');
      }}
    >
      <TextField
        variant="standard"
        placeholder="Add todo"
        margin="normal"
        onChange={event => {
          setValue(event.target.value);
        }}
        value={value}
        />
        <Button clicked={value}>Create</Button>
    </form>
  );
};
export default Todo;