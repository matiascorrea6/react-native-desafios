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
      <View style={styles.header}>
        <Pressable style={styles.pressable} onPress={()=> setCategorySelected('')}>
          <Text style={styles.home}>Home</Text>
        </Pressable>
      </View>
      <View style={styles.search}>
        <Search keyword={keyword} onSearch={setKeyword}/> 
      </View>
      <View style={styles.lista}>
        <FlatList 
          data={products}
          keyExtractor={(item) => item.id}
          style={styles.flatlist}
          renderItem={({item}) => <ProductItem product={item} />}
          />
      </View>
    </View>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    backgroundColor: colors.blue2
  }, 
  header: {
    width: '100%',
  },
  pressable: {
    alignSelf: "center",
    width: '55%',
  },
  home: {
    fontSize: 30,    
    paddingVertical: 10,
    borderRadius: 10,
    textAlign: 'center',
    color: 'white',    
    backgroundColor: colors.blue1,
  },
  lista: {
    width: '100%',
    marginTop: 10,
  },
  flatlist: {
    width: '80%',
    backgroundColor: colors.blue1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignSelf: 'center',
    borderRadius: 3
    },
  search: {
    width: '100%',
    alignItems: 'center',
  }
})