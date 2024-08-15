import React from 'react'
import {MultiChatSocket,MultiChatWindow, useMultiChatLogic} from "react-chat-engine-advanced"

function ChatsPage(props) {
    const chatprops=useMultiChatLogic(b75b6aa7-5411-4860-9835-c1a017760f94,props.user.username, props.user.secret)
  return (
    <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatprops}/>
        <MultiChatWindow {...chatprops} style={{height:'100vh'}}/>
        

      
    </div>
  )
}

export default ChatsPage
