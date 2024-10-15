import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../constants/color';
import { customFontFamily } from '../constants/font';

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <Icon name="search-outline" size={19} color={colors.lightGreen} />
      <TextInput
        style={styles.searchInput}
        color={colors.lightGreen}
        placeholder="Search Coffee ..."
        placeholderTextColor={colors.lightGreen}
        editable={true}
      />
      <Icon name="options-outline" size={24} color="green" />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    margin: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    height: 51,
    borderRadius: 30,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    color: colors.lightGreen,
    fontFamily: customFontFamily.SemiBold,
    fontSize: 14,
    fontWeight: '600',
  },
})




// import { StyleSheet, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
// import React, { useRef } from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { colors } from '../constants/color';

// const SearchBar = () => {
//   const textInputRef = useRef(null); // Create a reference to the TextInput

//   return (
//     <TouchableWithoutFeedback onPress={() => textInputRef.current?.focus()} accessible={false}>
//       <View style={styles.searchBar}>
//         <Icon name="search-outline" size={20} color={colors.lightGreen} />
//         <TextInput
//           ref={textInputRef}
//           style={styles.searchInput}
//           placeholder="Search Coffee ..."
//           placeholderTextColor={colors.lightGreen}
//           editable={true}
//         />
//         <Icon name="options-outline" size={20} color="green" />
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };

// export default SearchBar;

// const styles = StyleSheet.create({
//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F3F3F3',
//     marginHorizontal: 20,
//     marginVertical: 10,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderRadius: 30,
//     elevation: 1,
//   },
//   searchInput: {
//     flex: 1,
//     marginLeft: 10,
//     fontSize: 16,
//     color: colors.lightGreen,
//   },
// });
