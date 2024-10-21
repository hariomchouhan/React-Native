import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { customFontFamily } from '../constants/font';
import { colors } from '../constants/color';

const products = [
    { id: '11', name: 'Cappuccino', isLike: true, productType: 'With Sugar', price: '50.000', currencySymbol: 'Rp', image: require('../assets/productImage/cappuccino1.png') },
    { id: '12', name: 'Coffee', isLike: false, productType: 'Without Sugar', price: '50.000', currencySymbol: 'Rp', image: require('../assets/productImage/coffee1.png') },
    { id: '13', name: 'Cappuccino', isLike: true, productType: 'Without Sugar', price: '50.000', currencySymbol: 'Rp', image: require('../assets/productImage/cappuccino3.png') },
    { id: '14', name: 'Cappuccino', isLike: false, productType: 'With Sugar', price: '50.000', currencySymbol: 'Rp', image: require('../assets/productImage/cappuccino1.png') },
    { id: '15', name: 'Coffee', isLike: true, productType: 'With Sugar', price: '50.000', currencySymbol: 'Rp', image: require('../assets/productImage/coffee1.png') },
    { id: '16', name: 'Cappuccino', isLike: false, productType: 'With Sugar', price: '50.000', currencySymbol: 'Rp', image: require('../assets/productImage/cappuccino3.png') },
    { id: '17', name: 'Coffee', isLike: false, productType: 'Without Sugar', price: '50.000', currencySymbol: 'Rp', image: require('../assets/productImage/coffee1.png') },
    { id: '18', name: 'Cappuccino', isLike: true, productType: 'Without Sugar', price: '50.000', currencySymbol: 'Rp', image: require('../assets/productImage/cappuccino3.png') },
    { id: '19', name: 'Cappuccino', isLike: false, productType: 'With Sugar', price: '50.000', currencySymbol: 'Rp', image: require('../assets/productImage/cappuccino1.png') },
    { id: '20', name: 'Coffee', isLike: true, productType: 'With Sugar', price: '50.000', currencySymbol: 'Rp', image: require('../assets/productImage/coffee1.png') },
];

const WithLikeProducts = () => {
    return (
        <>
            <FlatList
                scrollEnabled={true}
                data={products}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.productList}
                renderItem={({ item }) => (
                    <View style={styles.productCard}>
                        <Image source={item.image} style={styles.productImage} />
                        <View style={styles.TopContainer}>
                            <Text style={styles.productName}>{item.name}</Text>
                            {item?.isLike === true ? (
                                <Image
                                    style={styles.heartImage}
                                    source={require('../assets/images/HeartFilled.png')}
                                />
                            ) : (
                                <Image
                                    style={styles.heartImage}
                                    source={require('../assets/images/Heart.png')}
                                />
                            )}

                        </View>
                        <View style={styles.bottomContainer}>
                            <View style={styles.bottomContainerLeft}>
                                <Text style={styles.productType}>{item.productType}</Text>
                                <View style={styles.priceContainer}>
                                    <Text style={styles.currencySymbol}>{item.currencySymbol}</Text>
                                    <Text style={styles.productPrice}>{item.price}</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.addButton}>
                                <AntDesign name="pluscircle" size={33} color="green" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </>
    )
}

const styles = StyleSheet.create({
    productList: {
        paddingHorizontal: 20,
        width: '100%',
        flex: 1,
        alignItems: 'center',
    },
    productCard: {
        width: 152,
        height: 205,
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 4,
        margin: 10,
        marginHorizontal: 20,
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 8,
    },
    TopContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 14,
    },
    productName: {
        fontSize: 14,
        fontWeight: '600',
        fontFamily: customFontFamily.SemiBold,
        color: colors.black,
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
    heartImage: {
        width: 14,
        height: 14,
    },
    addButton: {
        marginTop: 10,
        marginRight: 4,
        borderRadius: 20,
    },
})

export default WithLikeProducts