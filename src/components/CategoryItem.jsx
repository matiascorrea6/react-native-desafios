import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import { colors } from '../global/colors';

const CategoryItem = ({ category }) => {
  return (
    <>
    <Card style={styles.card}>
      <Text style={styles.text}> {category} </Text>
    </Card>
    </>
  );
};

export default CategoryItem

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    paddingTop: 20,
  },
  text: {
    fontSize: 30,
    backgroundColor: colors.blue3,
    textAlign: 'center',
    color: colors.grey1,
    width: '80%',
    borderRadius: 10,
  },
})