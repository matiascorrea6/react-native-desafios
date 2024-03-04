import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'

const Pokemon = () => {

  const [counter, setCounter] = useState(1)
  const [pokemon, setPokemon] = useState('');
  
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
      .then((res)=> res.json())
      .then((data)=> setPokemon(data))
      .catch(err=> console.log(err));
  }, [counter]);

  return pokemon ? (
            <View style={styles.view}>
                <View style={styles.botons}>
                    <Pressable style={styles.pressable} onPress={()=> setCounter(counter - 1)}>
                    <Text style={styles.textpressable}>{'<'}</Text>
                    </Pressable>
                
                    <Text style={styles.text}>pokemon {counter}</Text>

                    <Pressable style={styles.pressable} onPress={()=> setCounter(counter + 1)}>
                    <Text style={styles.textpressable}>{'>'}</Text>
                    </Pressable>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text}>{pokemon.name}</Text>
                    <Image style={styles.img} source={{ uri: pokemon.sprites.front_default }} />
                </View>
            </View>
        ) : (
            <Text>cargando...</Text>
        );
}

export default Pokemon

const styles = StyleSheet.create({
    view: {
      flex: 1,
      marginTop: 40,
      padding: 10,
      alignItems: "center"
    },
    pressable: {
      marginTop: 40,
     // padding: 10
    },
    text: {
      fontSize: 40,
    },
    img: {
      width: 200,
      height: 200,
    },
    card: {
      marginTop: 40,
      padding: 10,
      alignItems: "center"
    },
    botons: {
      flexDirection: "row",
      gap: 10,
      alignItems: "center"
    },
    textpressable: {
      padding: 10,
      margin: 5,
      fontSize: 25
    }
  })