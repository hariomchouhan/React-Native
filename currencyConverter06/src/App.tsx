import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

// Constants
import { currencyByRupee } from './constants';
import CurrencyButton from './components/CurrencyButton';

// Component
import Snackbar from 'react-native-snackbar';

function App(): React.JSX.Element {
  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: "Enter a value to convert",
        backgroundColor: "#EA7773",
        textColor: "#000000",
      })
    }

    const inputAmount = parseFloat(inputValue)
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)} 🤑`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    } else {
      return Snackbar.show({
        text: "Not a valid number to convert",
        backgroundColor: "#F4BE2C",
        textColor: "#000000",
      })
    }
  }
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              maxLength={14}
              value={inputValue}
              clearButtonMode='always' // only for ios
              onChangeText={setInputValue}
              keyboardType='number-pad'
              placeholder='Enter amount in Rupee'
              style={styles.inputAmountField}
            />
          </View>
          {resultValue && (
            <Text style={styles.resultTxt}>
              {resultValue}
            </Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <Pressable
                style={[
                  styles.button,
                  targetCurrency === item.name && styles.selected
                ]}
                onPress={() => buttonPressed(item)}
              >
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        <Text style={styles.hariom}>Hari ॐ</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebc034',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // Add shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Add elevation for Android
    elevation: 1,
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#fef9c3',
    fontSize: 17,
    borderColor: '#737373',
    color: '#ebc034'
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    height: 70,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
  hariom: {
    flex: 1,
    color: '#000',
    position: 'absolute',
    bottom: 8,
    left: 15,
    fontSize: 35,
    opacity: 0.3
  }
});

export default App;
