import { useState } from 'react'; 
import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, TextInput, Pressable, StyleSheet } from 'react-native';
import shoeImg from './assets/nike-marron.webp';

const DATA = [
  {
    name: "remera",
    id:"1",
  },
  {
    name: "gorra",
    id:"2",
  },
  {
    name: "pantalon",
    id:"3",
  },
];
{/* {DATA.map((item)=> (
  <View key={item.id}>
    <Text style={styles.product}>{item.name}</Text>
  </View>
))} */}

export default function App() {
  // useState y useEffect
  //const [valor, setValor] = useState(null / 1 / {name: 'hola'})
  const [counter, setCounter] = useState(0)

  const handleCounterAdd = ()=> setCounter(counter + 1)
  
  return (
    <View style={styles.page}> 
      <View style={styles.carrito}>
        <Text>CARRITO</Text>
        <Image style={styles.imgCarrito} source={{uri: 'https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-shopping-cart.png'}}/>
        {/* source={{shoeImg}} */}
      </View>

      <View style={styles.container}>
        <TextInput style={styles.textImput} placeholder='ingrese un producto' />
        <Pressable>
          <Text style={styles.pressable}> + </Text>
       </Pressable>
      </View>      

      <View style={styles.productList}>
        <Text style={styles.product}>zapatilla</Text>
        <Text style={styles.product}>remera</Text>
        <Text style={styles.product}>pantalon</Text>
        <Text style={styles.product}>zapatilla</Text>
        <Text style={styles.product}>remera</Text>
        <Text style={styles.product}>pantalon</Text>
      </View>

      <Pressable onPress={handleCounterAdd}>
        <Text style={styles.counter}>{counter}</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'grey',
    flex: 1,
  },
  carrito: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: "15%",
    gap: 5,
  },
  imgCarrito: {
    width: 60,
    height: 60,
  },
  container: {
    flexDirection: 'row',
    gap: 5, 
    alignItems: 'center',
  },
  textImput: {
    borderColor: 'black', 
    borderWidth: 1, 
    margin: 10, 
    paddingVertical: 6, 
    width: "80%",
  },
  pressable: {
    fontSize: 50,
  },
  productList: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  product: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 4,
  },
  counter: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 4,
  },
})