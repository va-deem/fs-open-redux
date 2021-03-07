import React, { useEffect } from 'react';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AndecdoteList';
import Notification from './components/Notification';
import anecdoteService from './services/anecdotes';
import { initAnecdotes } from './reducers/anecdoteReducer';
import { useDispatch } from 'react-redux';
import store from './store';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    anecdoteService.getAll().then(anecdotes => {
      store.dispatch(initAnecdotes(anecdotes))
    });
  }, [dispatch]);

  return (
    <div>
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
