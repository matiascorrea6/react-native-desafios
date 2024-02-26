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
          width: 'full',
          backgroundColor: colors.blue1,
          paddingVertical: 20,
          marginTop: 40,
        },
      text: {
        fontSize: 30,
        color: colors.grey1,
        fontWeight: 'bold',
        textAlign: 'center',
      },
  });