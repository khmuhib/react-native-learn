import { StyleSheet } from "react-native";

const customStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    },
    square: {
      height: 200,
      width: 200,
      backgroundColor: '#FECD70',
      borderColor: 'blue',
      borderWidth: 10,
      borderRadius: 50,
    }
  });
  
  export {customStyle}