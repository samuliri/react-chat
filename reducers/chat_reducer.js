import ActionTypes from '../constants/action_types';

export function chatReducer(state = {}, action) {
  switch(action.type) {
    case ActionTypes.GetMessageRequested: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case ActionTypes.GetMessageRejected: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in getting message.',
      });
    }
    case ActionTypes.GetMessageFulfilled: {
      const { host, info, messages } = action.message;
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Got message.',
        host,
        info
      });
      newState.messages = [];
      if (messages) {
        newState.messages = Object.keys(messages).map(k => messages[k]);
      }
      return newState;
    }

    case ActionTypes.AddMessageRequested: {
      return Object.assign({}, state, {
        inProgress: true,
        error: '',
        success: ''
      });
    }
    case ActionTypes.AddMessageRejected: {
      return Object.assign({}, state, {
        inProgress: false,
        error: 'Error in adding guest.',
      });
    }
    case ActionTypes.AddMessageFulfilled: {
      const newState = Object.assign({}, state, {
        inProgress: false,
        success: 'Added message.'
      });
      return newState;
    }
    case ActionTypes.MessageAdded: {
      const newState = Object.assign({}, state);
      newState.messages = newState.messages || [];
      newState.messages = newState.messages.slice();
      newState.messages.push(action.message);
      return newState;
    }
    default:
      return state;
  }
}
