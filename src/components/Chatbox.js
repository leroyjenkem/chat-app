import React, { Component } from 'react';
import firebase from '../firebase';

class Chatbox extends Component {
  constructor(props){
    super(props);
    this.state = {
      chats: []
    }
  }
  componentDidMount() {
    const chatRef = firebase.database().ref('general');
    chatRef.on('value', (snapshot) => {
      const getChats = snapshot.val();
      let ascChats = [];
      for (let chat in getChats) {
        if (getChats[chat].message !== '') {
          ascChats.push({
            id: chat,
            message: getChats[chat].message,
            user: getChats[chat].user,
            date: getChats[chat].timestamp,
          });
        }
      }
      const chats = ascChats;
      this.setState({chats});
    });
  }
  render() {
    return(
      <div className="chatbox">
        <ul className="chat-list">
          {this.state.chats.map((chat) => {
            const postDate = new Date(chat.date);
            return(
              <li key={chat.id} className="messages">
                <span className="msgusername">
                  {chat.user + ' '}
                </span>
                <span className="msgdate">
                  {' ( ' + postDate.toLocaleString('en-US', {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                    }).replace(',','﹫') + ' )'}
                </span>
                <br />
                <span className="actualmsg">
                  {chat.message}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Chatbox;
