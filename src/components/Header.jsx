import { Text, View, StyleSheet } from "react-native";
import { colors } from "../global/colors";

function Header({ title }) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    );
  }
  
  export default Header;
  
  const styles = StyleSheet.create({
      container: {
          width: '65%',
          paddingVertical: 15,
          marginTop: 20,
          borderRadius: 20,
          // backgroundColor: colors.
        },
      text: {
        fontSize: 35,
        color: colors.grey2,
        fontWeight: 'bold',
        textAlign: 'center',
      },
  });