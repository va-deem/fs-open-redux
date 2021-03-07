import anecdoteService from '../services/anecdotes';

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_VOTE':
      return state.map(a => a.id === action.data.id ? action.data : a);
    case 'ADD_ANECDOTE':
      return [...state, action.data];
    case 'INIT_ANECDOTES':
      return [...action.data];
    default:
      return state;
  }
};

export const voteForAnecdote = (id, anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.addVote(id, anecdote);
    dispatch({
      type: 'ADD_VOTE',
      data: newAnecdote,
    })
  }
}

export const addAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.addOne({ content, votes: 0 });
    dispatch({
      type: 'ADD_ANECDOTE',
      data: anecdote,
    });
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    });
  };
};

export default anecdoteReducer;
