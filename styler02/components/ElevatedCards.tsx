import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCards</Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardText}>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardText}>me</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardText}>to</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardText}>Scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardText}>more...</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardText}>😊</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        padding: 8,
    },
    card: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardElevated: {
        backgroundColor: "#CAD5E2",
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 1,
        shadowRadius: 2,
    },
    cardText: {
        color: "#000000"
    }
})