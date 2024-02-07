import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, TextInput, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import shoeImg from './assets/nike-marron.webp';

export default function App() {
  return (
    <View style={styles.page}> 
      <View style={styles.navbar}>
        <Text>CARRITO</Text>
        <Image style={styles.imgCarrito} source={{uri: 'https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-shopping-cart.png'}}/>
      </View>

      <View style={styles.container}>
        <TextInput style={styles.textImput} placeholder='ingrese un producto' />
        <TouchableOpacity>
          <Text style={styles.touchable}>+</Text>
       </TouchableOpacity>
      </View>      

      <View style={styles.productList}>
        <Text style={styles.product}>zapatilla</Text>
        <Text style={styles.product}>remera</Text>
        <Text style={styles.product}>pantalon</Text>
        <Text style={styles.product}>zapatilla</Text>
        <Text style={styles.product}>remera</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: "15%",
    gap: 5,
  },
  page: {
    backgroundColor: 'grey',
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    gap: 5, 
    alignItems: 'center',
  },
  textImput: {
    borderColor: 'black', 
    borderWidth: 2, 
    margin: 10, 
    paddingVertical: 6, 
    width: "80%",
  },
  touchable: {
    fontSize: 50,
  },
  productList: {
    justifyContent: "center",
    alignItems: "center",
  },
  product: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 4,
  },
  imgCarrito: {
    width: 60,
    height: 60,
  },
})

{/* <Image style={{width: 200, height: 200}} source={{shoeImg}}/> */}