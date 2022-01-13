import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

const TodoList = ({ todos, deleteTodo }) => (
  <List>
    {todos.map((todo, index) => (
      <ListItem key={index.toString()}>
        <Checkbox color="success" tabIndex={-1} disableRipple/>
        <ListItemText primary={todo} />
        <IconButton
          aria-label="Delete"
          onClick={() => {
          deleteTodo(index);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </ListItem>
    ))}
  </List>
);

export default TodoList;