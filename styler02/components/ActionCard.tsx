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
                        uri: 'https://miro.medium.com/v2/resize:fit:1400/1*QRyy7n9T0sYPTa4XMkmJvQ.png'
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
    card: {},
    elevatedCard: {},
    headingContainer: {},
    headerText: {},
    cardImage: {
        width: 350,
        height: 250,
    },
    cardBody: {},
    footerContainer: {},
    socialLinks: {}
})