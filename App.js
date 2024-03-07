import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';
import Home from './src/screens/Home';
import ItemListCategories from './src/screens/ItemListCategories';
import Clases from './src/clases/Clases';
import { colors } from './src/global/colors';

export default function App() {

  const [categorySelected, setCategorySelected] = useState('');

  const [fontsLoaded] = useFonts(fonts);

  if(!fontsLoaded) {
    return null
  };

  return (
    <View style={styles.page}> 
      {categorySelected ? (
        <ItemListCategories setCategorySelected={setCategorySelected} category={categorySelected}/>
      ) : (
        <Home setCategorySelected={setCategorySelected}/>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.grey2,
 }
})