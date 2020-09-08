import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import Chats from "./src/Chats"
import ChatScreen from "./src/ChatScreen"
import Header from "./src/Header"
import TinderCards from "./src/TinderCards"
import SwipeButtons from "./src/SwipeButtons"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './src/App.css';

function App() {
  return (
    <View className="App">
      {/* Always put '/' path at the bottom otherwise it'll hit first and never continue */}
      <Router> 
         <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chats" />
            <ChatScreen />
          </Route>
          <Route path="/chats">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
          {/* Tinder Cards component */}
          {/* Buttons below tinder cards component */}
          {/* Chat screen */}
          {/* Individual chat screen */}
        </Switch>
      </Router>
    </View>
  );
}

export default App;
