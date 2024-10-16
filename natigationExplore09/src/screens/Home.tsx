import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Navigation
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container} >
      <Text style={styles.smallText}>Home Screen</Text>
      <Button
      title='Go to this'
      // onPress={() => navigation.navigate("Details", {
      //   productId: "86"
      // })}

      // onPress={() => navigation.navigate("Details")}

      // .replace() is replace the all screens with this screen and don't go back with this screen
      // onPress={() => navigation.replace("Details", {
      //   productId: "86"
      // })}  

      onPress={() => navigation.push("Details", {
        productId: "86"
      })}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000'
  }
})