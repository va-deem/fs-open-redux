import React from 'react';
import { connect } from 'react-redux';
import { addAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {
  const add = async (event) => {
    event.preventDefault();

    const anecdote = event.target.anecdote.value;
    event.target.anecdote.value = '';
    if (anecdote.length > 0) {
      props.addAnecdote(anecdote);
      props.setNotification(`you add message '${anecdote}'`, 5)
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

const mapDispatchToProps = {
  addAnecdote,
  setNotification,
};

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm);

export default ConnectedAnecdoteForm;
