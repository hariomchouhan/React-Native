import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { colors } from '../constants/color';
import { customFontFamily } from '../constants/font';
import WithLikeProducts from '../components/WithLikeProducts';
import FooterNavigation from '../components/FooterNavigation';

const FavoriteScreen = () => {
    return (
        <View style={styles.container}>
            {/* Scrollable Content */}
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Special Offer Section */}
                <Text style={styles.heading}>Favorite</Text>
                <WithLikeProducts />
            </ScrollView>

            {/* Fixed Footer Navigation */}
            <FooterNavigation />
        </View>
    );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    scrollContainer: {
        paddingBottom: 80,
        overflow: 'scroll',
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
