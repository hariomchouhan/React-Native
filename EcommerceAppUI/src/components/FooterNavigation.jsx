import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from '../constants/color';
import { useNavigation } from '@react-navigation/native';

const FooterNavigation = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.bottomNavigation}>
            <TouchableOpacity
            onPress={() => {
                navigation.navigate("Home")
            }}
            >
                <Entypo name="home" size={28} color="green" />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {
                navigation.navigate("Favorite")
            }}
            >
                <Icon name="heart-outline" size={28} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="cart-outline" size={28} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="person-outline" size={28} color="gray" />
            </TouchableOpacity>
        </View>
    );
};

export default FooterNavigation;

const styles = StyleSheet.create({
    bottomNavigation: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 99,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderTopColor: '#F3F3F3',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,

        // Shadow for the top side (iOS)
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: -6 },
        shadowOpacity: 0.3,
        shadowRadius: 10,

        // Shadow for the top side (Android)
        elevation: 8,
    },
});
