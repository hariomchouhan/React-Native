import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { colors } from '../constants/color';
import { customFontFamily } from '../constants/font';
import FooterNavigation from '../components/FooterNavigation';
import CartProducts from '../components/CartProducts';
import CartSummary from '../components/CartSummary';

const CartScreen = () => {
    return (
        <View style={styles.container}>
            {/* Scrollable Content */}
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Special Offer Section */}
                <Text style={styles.heading}>Cart</Text>
                <CartProducts />
                <CartSummary />
            </ScrollView>

            {/* Fixed Footer Navigation */}
            <FooterNavigation />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    scrollContainer: {
        paddingBottom: 80,
        width: 380,
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

export default CartScreen;

