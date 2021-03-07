const filterReducer = (state = null, action) => {
  console.log('filterReducer state now: ', state);
  console.log('filterReducer action', action);

  switch (action.type) {
    case 'SET_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export const filterChange = (filter) => {
  return {
    type: 'SET_FILTER',
    filter,
  };
};

export default filterReducer;
