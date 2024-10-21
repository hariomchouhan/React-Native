import { StyleSheet } from 'react-native'
import React from 'react'

// Navigation imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import CartScreen from './screens/CartScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                // initialRouteName='Welcome'
                screenOptions={{
                    headerShown: false,
                }}
            >
                {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
                {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
                {/* <Stack.Screen name="Favorite" component={FavoriteScreen} /> */}
                <Stack.Screen name="Cart" component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})
