import React from 'react'
import {MultiChatSocket,MultiChatWindow, useMultiChatLogic} from "react-chat-engine-advanced"

function ChatsPage(props) {
    const chatprops=useMultiChatLogic('Chat-id',props.user.username, props.user.secret)
  return (
    <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatprops}/>
        <MultiChatWindow {...chatprops} style={{height:'100vh'}}/>
        

      
    </div>
  )
}

export default ChatsPage
