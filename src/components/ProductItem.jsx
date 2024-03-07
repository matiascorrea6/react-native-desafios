import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import { colors } from '../global/colors';

const ProductItem = ({product}) => {
  return (
    <View style={styles.view}>
        <Card style={styles.style}>
            <Text style={styles.text}>{product.title}</Text>
        </Card>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  view: {
    // height: 'auto',
    // paddingVertical: 2

  },
  style: {
    marginVertical: 2
  },
  text: {
    fontSize: 20,
    paddingVertical: 2,
    marginHorizontal: 5,
    paddingLeft: 5,
    color: colors.blue1,
    backgroundColor: colors.grey2,
    borderRadius: 2,
  },
})