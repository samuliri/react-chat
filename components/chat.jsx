import React from 'react';

export default class Chat extends React.Component {

  constructor() {
    super();
    this.state = {
      message: ''
    };
  }

  componentDidMount() {
    this.props.onGetMessage();
  }

  render() {
    const { host, info, messages } = this.props.chat;
    return (
      <div className="container">
        <div className="well">
          <h1>Chat</h1>
        </div>
        <div className="bg-warning meeting-summary">
          <div className="row">
            <div className="col-sm-4 col-md-2">
              <b>Host:</b>
            </div>
            <div className="col-sm-8 col-md-10">
              {host}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-md-2">
              <b>Info:</b>
            </div>
            <div className="col-sm-8 col-md-10">
              {info}
            </div>
          </div>
        </div>
        <div className="bg-info meeting-form">
            <div className="row">
              <div className="col-sm-4 col-md-2">
                <b>Message:</b>
              </div>
              <div className="col-sm-8 col-md-10">
                <input
                  type="text"
                  value={this.state.message}
                  onChange={e => this.setState({ message: e.target.value })}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-md-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.props.onAddMessage(this.state.message)}
                >
                  Send
                </button>
              </div>
            </div>
        </div>
        <div className="message-list">
          {messages && messages.length > 0 ? (
            <ul>
              {messages.map((message, index) => {
                return (
                  <li key={index}>
                    {message.message}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}
