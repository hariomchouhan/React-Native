import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import { colors } from '../constants/color';
import { fontSize } from '../constants/dimensions';
import { customFontFamily } from '../constants/font';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            {/* Header Section */}
            <HomeHeader />

            {/* Greeting Section */}
            <Text style={styles.greeting}>Good morning, Yudi</Text>

            {/* Search Bar */}
            <SearchBar />

            {/* Categories Section */}
            <Text style={styles.categoryHeading}>Categories</Text>
            <Categories />

        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    greeting: {
        fontSize: 14,
        fontWeight: '600',
        marginHorizontal: 20,
        marginTop: 10,
        color: colors.black,
        fontFamily: customFontFamily.SemiBold,
    },
    categoryHeading: {
        fontSize: 14,
        fontWeight: '600',
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 10,
        color: colors.black,
        fontFamily: customFontFamily.SemiBold,
    },
});
