import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
      flex:1,
      backgroundColor:'blue',
      width:'100%'
    },
    body:{
      flex:8,
      backgroundColor:'white',
      width:'100%'
    },
    footer:{
      flex:1,
      backgroundColor:'red',
      width:'100%'
    }
  });