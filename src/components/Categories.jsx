import { FlatList, StyleSheet, Text, View } from 'react-native';
import categories from '../data/categories.json';
import CategoryItem from './CategoryItem';

const Categories = ({ setCategorySelected }) => {
  return (
    <View style={styles.view}>
     <FlatList 
        data={categories}
        renderItem={({ item })=> 
          <CategoryItem setCategorySelected={setCategorySelected} category={item} />
        }
        keyExtractor={(category) => category}      
        style={styles.flatlist}  
        />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    width: "full"
  },
  flatlist: {
    width: "90%",
    marginTop: 15,
    paddingHorizontal: 15,
    gap: 10
  }
  })
