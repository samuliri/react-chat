import ActionTypes from '../constants/action_types';
import database from './database';

export function watchGuestAddedEvent(dispatch) {
  database.ref('/message').on('child_added', (snap) => {
    dispatch(getGuestAddedAction(snap.val()));
  });
}

function getGuestAddedAction(message) {
  return {
    type: ActionTypes.MessageAdded,
    message
  };
}
