import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const WelcomeScreen = () => {
    return (
        <Image source={require('../assets/images/backgroundImage.png')}
            style={styles.BackgroundImage}
        ></Image>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    BackgroundImage: {
        height: '100%'
    }
})