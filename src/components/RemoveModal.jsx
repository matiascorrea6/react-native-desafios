import { Text, View, Pressable, StyleSheet, Modal} from 'react-native';

const RemoveModal = ({
    modalVisible,
    cartItems,
    setCartItems,
    setModalVisible,
    itemSelected,
})=> {
    
    const removeItem = () => {
        const filteredArray = cartItems.filter((item)=> item.id !== itemSelected)
        setCartItems(filteredArray);
        setModalVisible(false)
    }

    return(
      <Modal  animationType='slide' transparent visible={modalVisible} >
        <View style={styles.modal}>
          <Text>Si presiona continuar se elminara el siguiente producto.</Text>
          
          <Pressable onPress={removeItem}>
            <Text>si</Text>
          </Pressable>

          <Pressable onPress={()=> setModalVisible(false)}>
            <Text>no</Text>
          </Pressable>
        </View>
      </Modal>
    );
  } 
  
export default RemoveModal;


const styles = StyleSheet.create({
    modal: {
      marginTop: 400,
      justifyContent: "center",
      alignItems: "center",
      height: 100,
      backgroundColor: "white",
      borderRadius: 10,
      
    },
  })