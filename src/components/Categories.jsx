import { FlatList, StyleSheet, Text, View } from 'react-native';
import categories from '../data/categories.json';
import CategoryItem from './CategoryItem';

const Categories = () => {
  return (
    <View>
     <FlatList 
        data={categories}
        renderItem={({ item })=> <CategoryItem category={item}/>}
        keyExtractor={(category) => category}        
        />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        justifyContent: 'center',
    },
})

/*
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
*/