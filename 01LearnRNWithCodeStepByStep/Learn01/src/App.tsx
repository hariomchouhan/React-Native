import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonAndOnPress from './Components/ButtonAndOnPress'
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <LinearGradient
      colors={['#090979', '#02aed1']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      {/* Button and onPress event */}
      <ButtonAndOnPress />

    </LinearGradient>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    alignItems: 'center',
    gap: 20,
    backgroundColor: 'linear-gradient(145deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 36%)'
  }
})