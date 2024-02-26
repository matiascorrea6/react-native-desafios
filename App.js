import { View, StyleSheet } from 'react-native';
import Home from './src/screens/Home';
import ItemListCategories from './src/screens/ItemListCategories';

export default function App() {
  return (
    <View style={styles.page}> 
      <Home />
      {/* <ItemListCategories /> */}
    </View>
  );
}

const styles = StyleSheet.create({
 page: {
  flex: 1,
  backgroundColor: "black",
 }
})