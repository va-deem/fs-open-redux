import React from 'react';
import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const add = async (event) => {
    event.preventDefault();

    const anecdote = event.target.anecdote.value;
    event.target.anecdote.value = '';
    if (anecdote.length > 0) {
      dispatch(addAnecdote(anecdote));
      dispatch(setNotification(`you add message '${anecdote}'`, 10))
    }
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={add}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;

