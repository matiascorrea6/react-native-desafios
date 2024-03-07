import { FlatList, StyleSheet, Text, View } from 'react-native';
import categories from '../data/categories.json';
import CategoryItem from './CategoryItem';
import { colors } from '../global/colors';

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
    height: '80%',
  },
  flatlist: {
    width: "60%",
    marginTop: 5,
    paddingVertical: 5,
    marginLeft: 10,
    borderRadius: 5,
    backgroundColor: colors.blue1
  }
  })
