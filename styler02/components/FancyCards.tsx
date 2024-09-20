import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image 
        source={{
            uri: 'https://t3.ftcdn.net/jpg/01/13/01/70/360_F_113017086_PtETiC3OfSiiAfK9q8egOlvdjmwORkBh.jpg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Rajwada Palace</Text>
            <Text style={styles.cardLabel}>Clean City, Indore</Text>
            <Text style={styles.cardDescription}>Rajwada, also known as the Holkar Palace or Old Palace, is a historical palace in Indore that was constructed by the Holkars of the Maratha empire around 2 centuries ago.</Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
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
    cardElevated: {},
    cardImage: {
        height: 180
    },
    cardBody: {},
    cardTitle: {},
    cardLabel: {},
    cardDescription: {},
    cardFooter: {},
})