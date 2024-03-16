import { StyleSheet, Text, View, Image } from 'react-native';
import Card from './Card';
import { colors } from '../global/colors';

const ProductItem = ({ product }) => {
  return (
    <View style={styles.view}>
        <Card style={styles.style}>
          <Text style={styles.text}> {product.title} </Text>
          <Image style={styles.img} source={{ uri: product.images[0] }}/>
        </Card>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  view: { // espacio del componente lista
    alignItems: 'center',
  },
  style: { // espacio de la card
    marginVertical: 2,
    width: '80%',
  },
  text: { // espacio del title
    width: "100%",
    fontSize: 20,
    paddingVertical: 2,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    color: colors.blue1,
    backgroundColor: colors.grey2,
    borderRadius: 2,
  },
  img: { // espacio de la imagen
    width: 200,
    height: 100
  }
})