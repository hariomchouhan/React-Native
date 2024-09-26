import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): React.JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#6374ae')

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)]      
    }
    setRandomBackground(color)
  }
  return (
    <>
      <StatusBar backgroundColor={`${randomBackground}`} />
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Click to change color</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.hariom}>Hariॐ</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#e7f0f8',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  actionBtnText: {
    fontSize: 24,
    color: '#000000',
    textTransform: 'uppercase',
  },
  hariom: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    color: '#888888',
    opacity: 0.6,
    fontSize: 30,
    fontWeight: "600",
  }
});

export default App;
