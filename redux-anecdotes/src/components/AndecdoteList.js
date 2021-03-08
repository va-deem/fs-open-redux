import React from 'react';
import { connect } from 'react-redux';
import { voteForAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import Filter from './Filter';

const AnecdoteList = (props) => {
  const vote = (id) => {
    const anecdote = props.anecdotes.find(a => a.id === id);
    props.voteForAnecdote(id, anecdote);
    props.setNotification(`you voted '${anecdote.content}'`, 5);
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      {props.anecdotes.map(anecdote =>
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

const mapStateToProps = (state) => {
  const displayedAnecdotes = state.anecdotes.sort((a, b) => b.votes - a.votes);
  return state.filter !== null
    ? { anecdotes: displayedAnecdotes.filter(a => a.content.includes(state.filter)) }
    : { anecdotes: displayedAnecdotes };
};

const mapDispatchToProps = {
  voteForAnecdote,
  setNotification,
};

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);

export default ConnectedAnecdoteList;
