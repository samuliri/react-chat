import ActionTypes from '../constants/action_types';
import database from './database';

export function addMessage(message) {
  return dispatch => {
    dispatch(addMessageRequestedAction());
    const messagesRef = database.ref('/messages');
    messagesRef.push({
      message
    })
    .then(() => {
      dispatch(addTMessageFulfilledAction({ message }));
    })
    .catch((error) => {
      dispatch(addMessageRejectedAction());
    });
  }
}

function addMessageRequestedAction() {
  return {
    type: ActionTypes.AddMessageRequested
  };
}

function addMessageRejectedAction() {
  return {
    type: ActionTypes.AddMessageRejected
  }
}

function addMessageFulfilledAction(message) {
  return {
    type: ActionTypes.AddMessageFulfilled,
    message
  };
}
