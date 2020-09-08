import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Link, useHistory } from "react-router-dom";

function Header({backButton}) {
    const history = useHistory();

    return (
        // BEM - if we pass in a backbutton prop, render back button, else, render person icon
        <View className="header">
            { backButton ? (
                <IconButton onClick= {() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header__icon"/> 
                </IconButton>
             ) : (
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large" />
                </IconButton>
             ) }
            <Link to="/">
                <img className="header__logo" 
                    src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="test logo"/>
            </Link>
            <Link to="/chats">
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>
        </View>
    )
}

export default Header