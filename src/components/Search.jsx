import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { colors } from '../global/colors';

const Search = ({ onSearch }) => {    

  const [imput, setImput] = useState("");
  
  const handlesearch = () => {
    if (imput) {
      onSearch(imput)
    }
  };

  const cleanImput = () => {
    setImput("")
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textImput}
        placeholder="ingrese un producto..."
        value={imput}
        onChangeText={setImput}
      />
      <Pressable onPress={handlesearch} style={styles.pressable}>
        <AntDesign name="search1" size={25} color="white"/>
      </Pressable>
      <Pressable onPress={cleanImput} style={styles.pressable}>
        <Entypo name="circle-with-cross" size={25} color="white"/>
      </Pressable>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '95%',
      margin: 10,
      paddingHorizontal: 20,
      justifyContent: 'center',
    },
    textImput: {
      padding: 8,
      width: "90%",
      fontSize: 15,
      borderWidth: 2,
      borderRadius: 8, 
      borderColor: colors.grey2, 
      backgroundColor: 'white'
    },
    pressable: {
      marginHorizontal: 5
    }
})