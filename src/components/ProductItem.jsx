import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';

const ProductItem = ({product}) => {
  return (
    <>
        <Card style={{marginVertical: 20}}>
            <Text stle={styles.text}>{product.ti}</Text>
        </Card>
    </>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    },
})