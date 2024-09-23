import { View, StyleSheet, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';
import Home from './src/screens/Home';
import ItemListCategories from './src/screens/ItemListCategories';
import Clases from './src/clases/Clases';
import ItemDetail from './src/screens/ItemDetail';
import { colors } from './src/global/colors';

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  const [categorySelected, setCategorySelected] = useState("");
  const [productId, setProductId] = useState(0)

  if(!fontsLoaded) { //Carga las fonts
    return null
  };

  return (
    <SafeAreaView style={styles.page}> 
      {productId ? ( <ItemDetail productId={productId}/> ) : categorySelected ? 
        ( <ItemListCategories 
            setCategorySelected={setCategorySelected} 
            category={categorySelected}
            setProductId={setProductId}
          />
        ) : 
        ( <Home setCategorySelected={setCategorySelected}/> )
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.grey1,
 }
})