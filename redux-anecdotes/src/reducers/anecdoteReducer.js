const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_VOTE':
      return state.map(a => {
        const votedAnecdote = { ...a, votes: a.votes + 1 };
        return a.id === action.id ? votedAnecdote : a;
      });
    case 'ADD_ANECDOTE':
      return [...state, action.data];
    case 'INIT_ANECDOTES':
      return [...action.data];
    default:
      return state;
  }
};

export const voteForAnecdote = (id) => {
  return {
    type: 'ADD_VOTE',
    id,
  };
};

export const addAnecdote = (anecdote) => {
  return {
    type: 'ADD_ANECDOTE',
    data: anecdote,
  };
};

export const initAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  };
};

export default anecdoteReducer;
