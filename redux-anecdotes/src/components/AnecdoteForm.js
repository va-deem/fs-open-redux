import React from 'react';
import { useDispatch } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import anecdoteService from '../services/anecdotes';

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const add = async (event) => {
    event.preventDefault();

    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    if (content.length > 0) {
      const newNote = await anecdoteService.addOne({ content, votes: 0 });
      console.log('NEWNOTE', newNote);
      dispatch(addAnecdote(newNote));
      dispatch(setNotification(`you add message: '${newNote.content}'`));
      setTimeout(() => {
        dispatch(setNotification(null));
      }, 5000);
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

