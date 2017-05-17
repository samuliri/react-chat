import ActionTypes from '../constants/action_types';
import database from './database';

export function getMessage() {
  return dispatch => {
    dispatch(getMessageRequestedAction());
    return database.ref('/').once('value', snap => {
      const message = snap.val();
      console.warn(message);
      dispatch(getMessageFulfilledAction(message))
    })
    .catch((error) => {
      console.log(error);
      dispatch(getMessageRejectedAction());
    });
  }
}


function getMessageRequestedAction() {
  return {
    type: ActionTypes.GetMessageRequested
  };
}

function getMessageRejectedAction() {
  return {
    type: ActionTypes.GetMessageRejected
  }
}

function getMessageFulfilledAction(message) {
  return {
    type: ActionTypes.GetMessageFulfilled,
    message
  };
}
