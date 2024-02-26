import { useState } from 'react'; 
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import {FlatList, Text, View, Image, TextInput, Pressable, StyleSheet, Modal} from 'react-native';
import shoeImg from './assets/nike-marron.webp';
import RemoveModal from "./src/components/RemoveModal";
import Home from './src/screens/Home';


export default function App() {
  const [counter, setCounter] = useState(0)
  const [imputValue, setimputValue] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false); // estado invisible hasta que se toca el boton.
  const [itemSelected, setItemSelected] = useState(null);// distingue al producto seleccionado para eleminiarlo.


  const handleCounterAdd = ()=> setCounter(counter + 1)

  const handleImputChange = (value) => setimputValue(value)

  const handleModal = (id) => {
    setModalVisible(true);
    setItemSelected(id);
  };


  const addItem = ()=> {
    const newItem = {
      name: imputValue,
      id: new Date().getTime(),
    }
    setCartItems([...cartItems, newItem])
  }

  return (
    <View style={styles.page}> 
      <StatusBar />
      <View style={styles.carrito}>
        <Text>CARRITO</Text>
        <Image style={styles.imgCarrito} source={{uri: 'https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-shopping-cart.png'}}/>
      </View>


      <View style={styles.container}>
        <TextInput 
          onChangeText={handleImputChange} 
          value={imputValue} 
          style={styles.textImput} 
          placeholder='ingrese un producto' 
        />
        <Pressable onPress={addItem}>
          <Text style={styles.pressable}> + </Text>
        </Pressable>
      </View>      

      <View style={styles.productList}>
        <FlatList
          data={cartItems}
          renderItem={({ item })=> (
            <View style={{flexDirection: 'row', gap: 10}}>
              <Text style={styles.product}>{item.name}</Text>
              <Pressable onPress={()=> handleModal(item.id)}>
                <Text style={{fontSize: 20}}> 🗑️ </Text>
              </Pressable>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <Pressable onPress={handleCounterAdd}>
        <Text style={styles.counter}>{counter}</Text>
        <Text>valor del imput: {imputValue}</Text>
      </Pressable>
      
      <RemoveModal
        modalVisible={modalVisible}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setModalVisible={setModalVisible}
        itemSelected={itemSelected}
      />

      <Home />
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
  //paddingTop: Constants.statusBarHeight;
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