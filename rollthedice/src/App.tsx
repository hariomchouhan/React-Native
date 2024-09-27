import { Animated, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState, useRef } from 'react';
import type { PropsWithChildren } from 'react';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
  fadeAnim: Animated.Value;
}>;

const Dice = ({ imageUrl, fadeAnim }: DiceProps): JSX.Element => {
  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      <Animated.Image style={styles.diceImage} source={imageUrl} />
    </Animated.View>
  );
};

export default function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const fadeAnim = useRef(new Animated.Value(1)).current; // Initial opacity is 1

  const rollDiceOnTap = () => {
    // Start fade-out animation
    Animated.timing(fadeAnim, {
      toValue: 0, // Fade out to opacity 0
      duration: 300, // 300ms for fade-out
      useNativeDriver: true,
    }).start(() => {
      // After fade-out, change the image
      let randomNumber = Math.floor(Math.random() * 6) + 1;

      switch (randomNumber) {
        case 1:
          setDiceImage(DiceOne);
          break;
        case 2:
          setDiceImage(DiceTwo);
          break;
        case 3:
          setDiceImage(DiceThree);
          break;
        case 4:
          setDiceImage(DiceFour);
          break;
        case 5:
          setDiceImage(DiceFive);
          break;
        case 6:
          setDiceImage(DiceSix);
          break;
        default:
          setDiceImage(DiceOne);
          break;
      }

      // Start fade-in animation after image change
      Animated.timing(fadeAnim, {
        toValue: 1, // Fade in to opacity 1
        duration: 300, // 300ms for fade-in
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} fadeAnim={fadeAnim} />
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll the Dice</Text>
      </Pressable>
      <Text style={styles.hariom}>~ Hariॐ</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  hariom: {
    fontSize: 24,
    color: '#000000',
    opacity: 0.3,
    fontWeight: "600",
    position: "absolute",
    bottom: 10,
    left: 20,
  }
});
