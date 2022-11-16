import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Todolist from './components/TodoList/index';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new'
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Code',
      status: 'new'
    },
  ]

  const [todoList, setTodolist] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState('all');

  const handleTodoClick = (todo, idx) => {
    const newTodolist = [...todoList];

    console.log(todo, idx)

    const newTodo = {
      ...newTodolist[idx],
      status: newTodolist[idx].status === 'new' ? 'completed' : 'new',
    };
    newTodolist[idx] = newTodo;

    setTodolist(newTodolist);
  }

  const handleShowAllClick = () => {
    setFilteredStatus('all');
  }


  const handleShowCompletedClick = () => {
    setFilteredStatus('completed');
  }


  const handleShowNewClick = () => {
    setFilteredStatus('new');
  }

  const renderTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);

  return (
    <div>
      <h3>Todo List</h3>
      <Todolist todoList={renderTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Complete</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;