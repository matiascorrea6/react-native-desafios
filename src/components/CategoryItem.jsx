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
    marginVertical: 5,
  },
  text: {
    fontSize: 25,
    borderRadius: 7,
    backgroundColor: colors.blue3,
    color: colors.grey1,
    fontFamily: 'notosans_reg',
  },
})