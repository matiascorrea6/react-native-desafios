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
        },
      text: {
        fontSize: 35,
        color: colors.blue1,
        fontWeight: 'bold',
        textAlign: 'center',
      },
  });