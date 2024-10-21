import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/color'
import { customFontFamily } from '../constants/font'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CartSummary = () => {
    return (
        <View style={styles.container}>
            <View style={styles.summaryContainer}>
                <View style={styles.row}>
                    <Text style={styles.summaryText}>Subtotal</Text>
                    <Text style={styles.summaryText}>Rp 100.000</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.summaryText}>Discount</Text>
                    <Text style={styles.summaryText}>Rp 25.000</Text>
                </View>
                <View style={[styles.row, { marginTop: 20 }]}>
                    <Text style={styles.summaryText}>Total</Text>
                    <Text style={styles.summaryText}>Rp 75.000</Text>
                </View>
            </View>
            <View>
                <Text style={styles.heading}>Payment</Text>
                <View style={styles.paymentContainer}>
                    <FontAwesome name="cc-visa" size={38} color="black" />
                    <FontAwesome name="cc-paypal" size={38} color="black" />
                    <FontAwesome name="cc-mastercard" size={38} color="black" />
                </View>
                <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Buy</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartSummary

const styles = StyleSheet.create({
    container: {
        marginTop: 36,
        paddingHorizontal: 38,
        flex: 1,
        gap: 30,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    summaryText: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.black,
        fontFamily: customFontFamily.Regular
    },
    heading: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 19,
        color: colors.black,
        fontFamily: customFontFamily.SemiBold,
    },
    paymentContainer: {
        flexDirection: 'row',
        gap: 21,
        marginBottom: 21,
    },
    btn: {
        height: 38,
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
        fontSize: 20,
        fontWeight: '600',
        color: colors.white,
    }
})