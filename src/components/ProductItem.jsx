import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';
import { colors } from '../global/colors';

const ProductItem = ({product}) => {
  return (
    <>
        <Card style={styles.text}>
            <Text style={styles.text}>{product.title}</Text>
        </Card>
    </>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
    text: {
      marginVertical: 5,
      fontSize: 25,
      color: colors.grey1,
    },
})