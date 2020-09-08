import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import Avatar from "@material-ui/core/Avatar"
import './ChatScreen.css'
import { Button } from '@material-ui/core';

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "Chicken",
            image: "https://media.istockphoto.com/photos/hen-picture-id831791228?k=6&m=831791228&s=612x612&w=0&h=SVuqO2A4nraoCsNLwo-pdqGfBF9Jn5UAsDu4tQdMa6M=",
            message: "Whagwan"
        },
        {
            name: "Chicken",
            image: "https://media.istockphoto.com/photos/hen-picture-id831791228?k=6&m=831791228&s=612x612&w=0&h=SVuqO2A4nraoCsNLwo-pdqGfBF9Jn5UAsDu4tQdMa6M=",
            message: "How's it going?"
        },
        {
            message: "I'm good yar!"
        }
    ]);

    const handleSend = e => {
        e.preventDefault(); // do this so that pressing enter doesn't refresh our chatbox

        setMessages([...messages, { message: input }])
        setInput('');
    }

    return (
        <View className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH CHICKEN ON 10/08/2020</p>
            { messages.map((message) => (
                message.name ? (
                    <div className="chatScreen_message">
                        <Avatar className="chat__image" alt={message.name} src={message.image}/>
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen_message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}
            <form className="chatScreen__input">
                <input 
                    className="chatScreen__inputField" 
                    type="text" 
                    placeholder="Type a message"
                    value={input}
                    onChange={e => setInput(e.target.value)}></input>
                <button 
                    className="chatScreen__inputButton"
                    type="submit"
                    onClick={handleSend}>SEND</button>
            </form>
        </View>
    )
}

export default ChatScreen
