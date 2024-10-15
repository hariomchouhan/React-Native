import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { customFontFamily } from '../constants/font';
import { colors } from '../constants/color';

const products = [
    { id: '1', name: 'Cappuccino', productType: 'With Sugar', price: '50.000', currencySymbol: 'Rp', image: require('../assets/productImage/cappuccino1.png') },
    { id: '2', name: 'Cappuccino', productType: 'With Sugar', price: '50.000', currencySymbol: 'Rp', image: require('../assets/productImage/cappuccino2.png') },
    { id: '3', name: 'Cappuccino', productType: 'With Sugar', price: '50.000', currencySymbol: 'Rp', image: require('../assets/productImage/cappuccino3.png') },
    { id: '4', name: 'Cappuccino', productType: 'With Sugar', price: '50.000', currencySymbol: 'Rp', image: require('../assets/productImage/cappuccino1.png') },
    { id: '5', name: 'Cappuccino', productType: 'With Sugar', price: '50.000', currencySymbol: 'Rp', image: require('../assets/productImage/cappuccino2.png') },
    { id: '6', name: 'Cappuccino', productType: 'With Sugar', price: '50.000', currencySymbol: 'Rp', image: require('../assets/productImage/cappuccino3.png') },
];

const Products = () => {
    return (
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    contentContainerStyle={styles.productList}
                    renderItem={({ item }) => (
                        <View style={styles.productCard}>
                            <Image source={item.image} style={styles.productImage} />
                            <Text style={styles.productName}>{item.name}</Text>
                            <View style={styles.bottomContainer}>
                                <View style={styles.bottomContainerLeft}>
                                    <Text style={styles.productType}>{item.productType}</Text>
                                    <View style={styles.priceContainer}>
                                        <Text style={styles.currencySymbol}>{item.currencySymbol}</Text>
                                        <Text style={styles.productPrice}>{item.price}</Text>
                                    </View>
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.addButton}>
                                        <AntDesign name="pluscircle" size={33} color="green" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </ScrollView>
        </View>
    )
}

export default Products

const styles = StyleSheet.create({
    productList: {
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
    productCard: {
        width: 152,
        height: 196,
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 4,
        margin: 10,
        gap: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    productImage: {
        width: 144,
        height: 100,
        borderRadius: 10,
        marginBottom: 10,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 8,
    },
    productName: {
        fontSize: 14,
        fontWeight: '600',
        fontFamily: customFontFamily.SemiBold,
        color: colors.black,
        marginHorizontal: 10,
    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,

    },
    bottomContainerLeft: {
        width: 95,
        flex: 1,
        gap: 4
    },
    priceContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    productType: {
        fontSize: 10,
        fontWeight: '400',
        fontFamily: customFontFamily.Regular,
        color: colors.black,
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
    addButton: {
        marginTop: 10,
        marginRight: 4,
        borderRadius: 20,
    },
})