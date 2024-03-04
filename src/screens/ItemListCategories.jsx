import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { colors } from '../global/colors';
import allProducts from '../data/products.json'; 
import ProductItem from '../components/ProductItem';
import Search from '../components/Search';

function ItemListCategories({category, setCategorySelected}) {
  
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");


  useEffect(()=> {
    if(category) {
      const products = allProducts.filter((product)=> product.category === category);
      const filteredProducts = products.filter((product)=> product.title.includes(keyword));
      setProducts(filteredProducts)
    } else {
      const filteredProducts = allProducts.filter((product)=> product.title.includes(keyword));
      setProducts(filteredProducts);
    }
  }, [category, keyword])

  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={()=> setCategorySelected('')}>
        <Text style={styles.home}>Home</Text>
      </Pressable>
      <View style={styles.search}>
        <Search keyword={keyword} onSearch={setKeyword}/> 
      </View>
      <FlatList 
        data={products}
        keyExtractor={(item) => item.id}
        style={styles.flatlist}
        renderItem={({item}) => <ProductItem product={item} />}
        />
    </View>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    alignItems: "center",
    backgroundColor: colors.grey1
  }, 
  pressable: {
    width: '65%',
  },
  home: {
    fontSize: 30,    
    paddingVertical: 10,
    borderRadius: 10,
    textAlign: 'center',
    color: 'white',    
    backgroundColor: colors.blue1,
  },
  flatlist: {
    width: '90%',
    marginTop: 10,
    paddingHorizontal: 5,
  },
  search: {
    width: '100%',
  }
})