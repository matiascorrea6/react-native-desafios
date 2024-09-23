import { FlatList, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import categories from '../data/categories.json';
import CategoryItem from './CategoryItem';
import { colors } from '../global/colors';

const Categories = ({ setCategorySelected }) => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={width < 500 ? styles.view : styles.viewpc}>
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
    width: "80%",
    height: '90%',
  },
  viewpc: {
    width: "60%",
    height: '65%',
  },
  flatlist: {
    width: "full",
    marginTop: 5,
    paddingVertical: 5,
    marginLeft: 10,
    borderRadius: 5,
    // backgroundColor: colors.blue1
  }
  })
