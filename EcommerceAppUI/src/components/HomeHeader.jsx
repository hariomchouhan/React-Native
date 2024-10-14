import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/color'
import Icon from 'react-native-vector-icons/Ionicons';
import { fontSize } from '../constants/dimensions';

const HomeHeader = () => {
    return (
        <View style={styles.header}>
            <View>
                <Image style={styles.profilePic} source={require('../assets/images/profileImage.png')} />
            </View>
            <View style={styles.location}>
                <Icon name="location" size={12} color="green" />
                <Text style={styles.locationText}>Jakarta, Indonesia</Text>
            </View>
            <View>
                <Icon name="notifications-outline" size={26} color="green" style={styles.notificationIcon} />
            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    profilePic: {
        width: 37,
        height: 37,
        borderRadius: 20,
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        marginLeft: 5,
        color: colors.black,
        fontSize: 12,
    },
    notificationIcon: {
        marginLeft: 'auto',
    },
})