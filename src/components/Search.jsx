import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

const Search = (keyword, onSearch) => {    
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textImput}
        placeholder="ingrese un producto..."
        value={keyword}
        onChangeText={onSearch}
      />
      <Pressable>
        <AntDesign name="search1" size={25} color="white"/>
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
        marginTop: 30,
    },
    textImput: {
        margin: 10, 
        padding: 10, 
        width: "80%",
        fontSize: 20,
        borderColor: 'white', 
        borderWidth: 1,
        borderRadius: 8, 
        fontWeight: 'bold',
        backgroundColor: 'white',
    }
})