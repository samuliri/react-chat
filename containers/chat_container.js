import { connect } from 'react-redux';
import { getMessage } from '../actions/get_message';
import { addMessage } from '../actions/add_message';
import { watchGuestAddedEvent } from '../actions/guest_added_event';
import Chat from '../components/chat.jsx';

function mapStateToProps(state) {
  return {
    chat: state.chat
  };
}

function mapDispatchToProps(dispatch) {
  watchGuestAddedEvent(dispatch);
  return {
    onGetMessage: () => dispatch(getMessage()),
    onAddMessage: (message) => dispatch(addMessage(message))
  };
}

const chatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default chatContainer;
