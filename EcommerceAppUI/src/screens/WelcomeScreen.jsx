import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackgroundImageSource from '../assets/images/backgroundImage.png';
import { customFontFamily } from '../constants/font';
import { fontSize } from '../constants/dimensions';
import { colors } from '../constants/color';

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={BackgroundImageSource}
            style={styles.imageBackground}
        >
            {/* Image */}
            <Image
                source={require('../assets/images/welcomeItems.png')}
            />
            {/* Heading */}
            <Text style={styles.heading}>Coffee so good, your taste buds will love it</Text>

            <Text style={styles.desc}>The best grain, the finest roast, the most powerful flavor.</Text>

            {/* Custom Button */}
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    console.log('Hariom');
                    navigation.navigate("Home")
                }}>
                <Text style={styles.btnText}>Get started</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    heading: {
        width: 200,
        textAlign: 'center',
        fontFamily: customFontFamily.SemiBold,
        fontSize: fontSize.xl,
        fontWeight: '600',
        color: colors.white,
    },
    desc: {
        width: 258,
        height: 41,
        textAlign: 'center',
        color: '#FFF',
        fontFamily: customFontFamily.Medium,
        fontSize: 14,
        fontWeight: '500',
    },
    btn: {
        width: 235,
        height: 54,
        borderRadius: 30,
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 42,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // For Android shadow
    },
    btnText: {
        fontFamily: customFontFamily.SemiBold,
        fontSize: 18,
        fontWeight: '600',
        color: colors.white,
    }
});
