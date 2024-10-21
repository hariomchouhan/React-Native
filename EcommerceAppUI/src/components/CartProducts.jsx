import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { customFontFamily } from '../constants/font'
import { colors } from '../constants/color'
import AntDesign from 'react-native-vector-icons/AntDesign';


const products = [
    {
        id: 1,
        name: 'Coffee',
        description: 'With Sugar',
        price: 50000,
        quantity: 2,
        capSize: 'Small',
        sugarLevel: 'No Sugar',
        image: require('../assets/productImage/cappuccino1.png'),
    },
    {
        id: 2,
        name: 'Coffee',
        description: 'With Sugar',
        price: 50000,
        quantity: 2,
        capSize: 'Small',
        sugarLevel: 'No Sugar',
        image: require('../assets/productImage/cappuccino2.png'),
    }
];


const CartProducts = () => {
    return (
        <View style={styles.container}>
            {
                products?.map((item) => (
                    <View style={styles.cartItem} key={item.id}>
                        <View style={styles.detailsContainer}>
                            <View>
                                <Image source={item.image} style={styles.productImage} />
                            </View>
                            <View style={styles.detailsRightContainer}>
                                <Text style={styles.productName}>{item.name}</Text>
                                <Text style={styles.productDescription}>{item.description}</Text>
                                <View style={styles.priceContainer}>
                                    <Text style={styles.currencySymbol}>Rp</Text>
                                    <Text style={styles.productPrice}>{item.price}</Text>
                                </View>
                            </View>
                            <View>
                                <Image source={require('../assets/images/Heart.png')} style={styles.heartImage} />
                            </View>
                        </View>
                        <View style={styles.quantityContainer}>
                            <View>
                                <Text style={styles.capSize}>Cap Size: <Text style={styles.boldText}>{item.capSize}</Text></Text>
                                <Text style={styles.sugarLevel}>Level Sugar: <Text style={styles.boldText}>{item.sugarLevel}</Text></Text>
                            </View>
                            <View style={styles.quantityRightContainer}>
                                <Text style={styles.quantity}>{item.quantity}</Text>
                                <TouchableOpacity style={styles.addButton}>
                                    <AntDesign name="pluscircle" size={33} color="green" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}

export default CartProducts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 16,
        width: 380,
    },
    cartItem: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 16,
        padding: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    productImage: {
        width: 144,
        height: 105,
        borderRadius: 20,
    },
    detailsContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 18,
    },
    detailsRightContainer: {
        flex: 1,
        gap: 4,
        paddingVertical: 18,
    },
    heartImage: {
        width: 14,
        height: 14,
        marginRight: 16,
        marginTop: 20
    },
    productName: {
        fontSize: 14,
        fontWeight: '600',
        fontFamily: customFontFamily.SemiBold,
        color: colors.black,
    },
    productDescription: {
        fontSize: 10,
        fontWeight: '400',
        fontFamily: customFontFamily.Regular,
        color: colors.black,
    },
    priceContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    currencySymbol: {
        color: colors.black,
        fontFamily: customFontFamily.SemiBold,
        fontSize: 12,
        fontWeight: '600',
        width: 20,
        height: 15,
        alignSelf: 'stretch'
    },
    productPrice: {
        fontSize: 18,
        color: colors.black,
        fontFamily: customFontFamily.SemiBold,
        fontWeight: '600',
        width: 68
    },
    price: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 4,
    },
    capSize: {
        fontSize: 14,
        color: '#666',
        fontFamily: customFontFamily.Regular,
        fontWeight: '400',
        color: colors.gray,
    },
    sugarLevel: {
        fontSize: 14,
        color: '#666',
        fontFamily: customFontFamily.Regular,
        fontWeight: '400',
        color: colors.gray,
    },
    boldText: {
        fontWeight: '700',
        fontFamily: customFontFamily.Bold,
    },
    quantityContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 18,
        marginBottom: 7,
        marginLeft: 4
    },
    quantity: {
        fontSize: 32,
        fontFamily: customFontFamily.SemiBold,
        fontWeight: '600',
        color: colors.black,
    },
    quantityRightContainer: {
        flexDirection: 'row',
        gap: 18,
        alignItems: 'center',
        marginRight: 7,
    },
})