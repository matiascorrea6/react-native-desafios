import { Pressable, StyleSheet, Text, View, FlatList } from "react-native";
import { useEffect, useState } from "react";

const ListOfPokemons = () => {

  const [counter, setCounter] = useState(1)
  const [pokemons, setPokemons] = useState(null);
  
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/ability/${counter}`)
      .then((res)=> res.json())
      .then((data)=> setPokemons(data.pokemon))
      .catch(err=> console.log(err));
  }, [counter]);

  return pokemons ? (
    <View>
        <Pressable onPress={()=> setCounter(counter + 1)}>
            <Text style={styles.text} >pokemon {counter}</Text>
        </Pressable>
        <FlatList
         data={pokemons}
         renderItem={({item})=> <Text>{item.pokemon.name}</Text>}
         keyExtractor={(item)=> item.name}
        />
    </View>
    ) : (
      <Text style={styles.text}>cargando...</Text>
    );
};

export default ListOfPokemons;

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  }
})
