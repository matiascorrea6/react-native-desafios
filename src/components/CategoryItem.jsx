import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import { colors } from '../global/colors';

const CategoryItem = ({ category, setCategorySelected }) => {
  return (
    <>
    <Card>
      <Pressable style={styles.pressable} onPress={()=> setCategorySelected(category)}>
        <Text style={styles.text}> {category} </Text>
      </Pressable>
      {/* <Image source={{ uri: category.Image[0]}}/> */}
    </Card>
    </>
  );
};

export default CategoryItem

const styles = StyleSheet.create({
  pressable: {
    width: 'full',
    marginVertical: 8,
    marginHorizontal: 10
  },
  text: {
    fontSize: 25,
    borderRadius: 7,
    backgroundColor: colors.blue1,
    color: colors.grey2,
    fontFamily: 'notosans_reg',
  },
})