import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

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
        <AntDesign name="search1" size={25} color="black"/>
      </Pressable>
      <Pressable onPress={cleanImput} style={styles.pressable}>
        <Entypo name="circle-with-cross" size={25} color="black"/>
      </Pressable>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        gap: 10,
    },
    textImput: {
      padding: 8,
        width: "75%",
        fontSize: 15,
        borderColor: 'grey', 
        borderWidth: 1,
        borderRadius: 8, 
    },
    pressable: {
      marginHorizontal: 5
    }
})