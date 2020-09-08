import React from 'react'
import "./Chats.css";
import Chat from './Chat'

function Chats() {
    return (
        <div className="chats">
            <Chat name="chicken"
                  message="yo yo!"
                  timestamp="40 seconds ago"
                  profilePic ="https://media.istockphoto.com/photos/hen-picture-id831791228?k=6&m=831791228&s=612x612&w=0&h=SVuqO2A4nraoCsNLwo-pdqGfBF9Jn5UAsDu4tQdMa6M="/>
            <Chat name="mushroom"
                  message="wagwaan!"
                  timestamp="53 seconds ago"
                  profilePic ="https://assets.epicurious.com/photos/5aec98cd5e455d485852fb54/6:4/w_1600%2Cc_limit/button-mushroom-050418.jpg"/>
            <Chat name="yomama"
                  message="sup boi!"
                  timestamp="2 minutes ago"
                  profilePic ="https://scx2.b-cdn.net/gfx/news/hires/2017/donkeysneedm.jpg"/>      
            <Chat name="jlya"
                  message="hahaha!"
                  timestamp="3 minutes ago"
                  profilePic ="https://images.unsplash.com/photo-1547721064-da6cfb341d50?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"/>
        </div>
    )
}

export default Chats
