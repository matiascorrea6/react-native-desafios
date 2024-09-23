import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import allProducts from '../data/products.json'
import Card from '../components/Card';

const ItemDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(()=> {
    const productFinded = allProducts.find((product)=> product.id === productId)
    setProduct(productFinded)
  }, [productId]);

  return (
    product ? 
      <View style={styles.view}>
        <Card style={styles.card}>
          <Text>{product.title}</Text>
          <Image style={styles.img} source={{ uri: `https://cors-anywhere.herokuapp.com/${product.images}` }}/>
        </Card>
      </View>
    : 
      <Text>Cargando...</Text>
  )
};

export default ItemDetail;

const styles = StyleSheet.create({
  view: {
    marginTop: 30,
    alignItems: "center",
  
  }, 
  card: {
    width: 70
  }

})