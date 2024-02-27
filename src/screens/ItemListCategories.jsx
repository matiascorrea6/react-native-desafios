import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { colors } from '../global/colors';
import allProducts from '../data/products.json'; 
import ProductItem from '../components/ProductItem';
import Search from '../components/Search';

function ItemListCategories({category}) {
  
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");


  useEffect(()=> {
    if(category) {
      const products = allProducts.filter((product)=> product.category === category);
      const filteredProducts = products.filter((product)=> product.title.includes(keyword));
      setProducts(filteredProducts)
    } 

  }, [category, keyword])

  return (
    <View style={styles.categories}>
      <Search keyword={keyword} onSearch={setKeyword}/> 
      <FlatList 
        data={products}
        renderItem={({item}) => <ProductItem product={item} />}
        keyExtractor={(item) => item.id}
        style={styles.text}
      />
    </View>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({
  categories: {
    marginVertical: 20,
  } , 
  text: {
    width: 'full',
    fontSize: 300,    
    marginVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.blue1,
    color: 'black',    
    },
})