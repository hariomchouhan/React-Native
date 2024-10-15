import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { customFontFamily } from '../constants/font';

const categories = [
    { name: 'Cappuccino', icon: 'ios-cafe-outline' },
    { name: 'Coffee', icon: 'ios-cafe-outline' },
    { name: 'Expresso', icon: 'ios-cafe-outline' },
    { name: 'Cappuccino', icon: 'ios-cafe-outline' },
];

const Categories = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
                {categories.map((category, index) => (
                    <TouchableOpacity key={index} style={[styles.categoryButton, { backgroundColor: index === 0 ? 'green' : 'white' }]} >
                        <Feather name="coffee" size={18} color={index === 0 ? 'white' : 'green'} style={styles.categoriesIcon} />
                        <Text style={[styles.categoryText, { color: index === 0 ? 'white' : 'green' }]}>{category.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    categoriesScroll: {
        marginHorizontal: 20,
        marginTop: 10,
        paddingBottom: 20,
    },
    categoryButton: {
        width: 112,
        height: 38,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: '#F3F3F3',
        borderRadius: 20,
        marginRight: 10,

        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,

        // Shadow for Android
        elevation: 5,
    },
    categoryText: {
        marginLeft: 5,
        fontWeight: '600',
        fontSize: 10,
        fontFamily: customFontFamily.SemiBold,
    },
})