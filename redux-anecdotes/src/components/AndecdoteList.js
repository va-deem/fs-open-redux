import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { voteForAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import Filter from './Filter';

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    const displayedAnecdotes = state.anecdotes.sort((a, b) => b.votes - a.votes);
    if (state.filter !== null) {
      return displayedAnecdotes.filter(a => a.content.includes(state.filter));
    }
    return displayedAnecdotes;
  });
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(voteForAnecdote(id));
    const anecdote = anecdotes.find(a => a.id === id);
    dispatch(setNotification(`you vote '${anecdote.content}'`));
    setTimeout(() => {
      dispatch(setNotification(null));
    }, 5000);
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnecdoteList;
