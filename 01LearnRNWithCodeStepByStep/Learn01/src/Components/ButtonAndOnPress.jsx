import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ButtonAndOnPress = () => {
    const myFunction = () => {
        console.warn('Hello ')
    }
    const myFunctionWithValue = (val) => {
        console.warn('Hello, ', val)
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>Button and onPress event</Text>
            <Button style={styles.btn} color={'green'} title='onPress' onPress={myFunction} />
            <Button style={styles.btn} color={'green'} title='onPress with value' onPress={() => myFunctionWithValue('Hariom Chouhan')} />
        </View>
    )
}

export default ButtonAndOnPress

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
    },
    btn: {
        width: '100%',
    }
})