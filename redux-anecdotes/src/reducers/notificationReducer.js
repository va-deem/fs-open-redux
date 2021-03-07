const notificationReducer = (state = null, action) => {
  if (action.type === 'SET_NOTIFICATION') {
    return action.notification;
  }
  return state;
};

export const setNotification = (notification) => {
  return {
    type: 'SET_NOTIFICATION',
    notification,
  };
};

export const removeNotification = (notification) => {
  return {
    type: 'REMOVE_NOTIFICATION',
    notification,
  };
};

export default notificationReducer;
