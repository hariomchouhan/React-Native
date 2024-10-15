import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import { colors } from '../constants/color';
import { customFontFamily } from '../constants/font';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import Products from '../components/Products';
import WithLikeProducts from '../components/WithLikeProducts';
import FooterNavigation from '../components/FooterNavigation';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            {/* Scrollable Content */}
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Header Section */}
                <HomeHeader />

                {/* Greeting Section */}
                <Text style={styles.greeting}>Good morning, Yudi</Text>

                {/* Search Bar */}
                <SearchBar />

                {/* Categories Section */}
                <Text style={styles.heading}>Categories</Text>
                <Categories />

                {/* Products Section */}
                <Products />

                {/* Special Offer Section */}
                <Text style={styles.heading}>Special Offers</Text>
                <WithLikeProducts />
            </ScrollView>

            {/* Fixed Footer Navigation */}
            <FooterNavigation />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    scrollContainer: {
        paddingBottom: 80,
    },
    greeting: {
        fontSize: 14,
        fontWeight: '600',
        marginHorizontal: 20,
        marginTop: 10,
        color: colors.black,
        fontFamily: customFontFamily.SemiBold,
    },
    heading: {
        fontSize: 14,
        fontWeight: '600',
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 10,
        color: colors.black,
        fontFamily: customFontFamily.SemiBold,
    },
});
