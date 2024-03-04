import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState } from "react";
import ListOfPokemons from "./ListOfPokemons";
import Pokemon from "./Pokemon";

const Clases = () => {

  const [showPok, setShowPok] = useState(true)

  return (
    <View style={styles.view}>
            <Pressable onPress={()=> setShowPok(true)}>
                <Text style={styles.text}>Home</Text>
            </Pressable>
            <Pressable onPress={()=> setShowPok(false)}>
                <Text style={styles.text}>List of pokenmons</Text>
            </Pressable>
            {showPok ? (<Pokemon />) : (<ListOfPokemons />)}
        </View>
  );
};

export default Clases;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: 60,
    padding: 10,
    alignItems: "center"
  },
  pressable: {
    marginTop: 40,
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
  textpressable: {
    padding: 10,
    margin: 5,
    fontSize: 25
  }
})

/**
 pokemon ? (
    <View>
      <Pressable onPress={()=> setCounter(counter + 1)}>
        <Text>pokemon {counter}</Text>
      </Pressable>
      <Text>{pokemon}</Text>
    </View>
    ) : (
      <Text></Text>
    )
*/