import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in JavaScript 21 - ES12
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://miro.medium.com/v2/resize:fit:680/1*TK3lUqXrmh82x3Mjb3Oa0A.png'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text numberOfLines={3}>ECMAScript, the standardized version of JavaScript is increasing its popularity and is becoming powerful every day. Since the introduction of ECMAScript 2015 (ES6) which was an immense growth forward, new features are added every year around June.</Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://google.com/')}
                    >
                        <Text
                            style={styles.socialLinks}
                        >Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://hariomchouhan.netlify.app/')}
                    >
                        <Text
                            style={styles.socialLinks}
                        >Follow Me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 'auto',
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 190,
    },
    cardBody: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6,
    }
})