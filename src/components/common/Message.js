import React from 'react'
import messages from '../../constants/messages'

function Message({id, value}) {
    const messageObj = messages.find(msg => msg.id === id);
    const messageType = messageObj ? messageObj.message : '';
    const message = typeof messageType === 'function' ? messageType(value) : messageType;
  return (
    <>{message}</>
  )
}

export default Message