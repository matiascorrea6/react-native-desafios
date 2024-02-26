import { StyleSheet, Text, View, FlatList } from 'react-native';
import products from '../data/products.json'; 
import ProductItem from '../components/ProductItem';

function ItemListCategories() {
  return (
    <View>
      <FlatList 
        data={products}
        renderItem={({item}) => <ProductItem product={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({
    text: {
      fontSize: 30,    
      width: 200,
      marginVertical: 200,
      backgroundColor: 'white',    
    },
})