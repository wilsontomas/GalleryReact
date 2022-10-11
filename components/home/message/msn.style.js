import { StyleSheet } from "react-native";
export const msnStyles = StyleSheet.create({
    container: {
     
      backgroundColor: '#fff',
      height:200
    },
    itemContainer:{
      flex:1,
     flexDirection:'row',
     alignItems:'center'
      
    },
    title:{
      paddingTop:20,
      paddingLeft:10
    },
    imageContainer:{
    flexGrow:1,
      
    },
    imageS:{
      height:50,
      width:50
    },
    info:{
      flexGrow:1,
      flexBasis:'15%',
      paddingRight:1
      
    },
    content:{
    
      fontSize:12
    }
   
  });