import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const StateinRN = () => {
    const [name, setName] = useState('Hariom');

    const updateName = () => {
        setName('Hariom Chouhan')
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, opacity: 0.4 }}>{name}</Text>
            <Button title='Update Name' color={'orange'} style={styles.btn} onPress={updateName} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
    },
    btn: {
        width: '100%',
    }
})

export default StateinRN