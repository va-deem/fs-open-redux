const notificationReducer = (state = null, action) => {
  if (action.type === 'SET_NOTIFICATION') {
    return action.notification;
  }
  return state;
};

export const setNotification = (notification, timeout) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      notification
    })
    setTimeout(() => {
      dispatch({
        type: 'SET_NOTIFICATION',
        notification: null,
      });
    }, timeout * 1000);
  }
}

export default notificationReducer;
