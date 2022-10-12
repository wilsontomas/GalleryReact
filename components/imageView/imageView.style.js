import { StyleSheet } from "react-native";


export const imageViewStyles = StyleSheet.create({
    container: {
    flexGrow:1,
     flexDirection:'row',
     height:100,
      flexWrap:'wrap'

      
    },
   
    photoContainer:{
     
      flexGrow:1,
      width:'100%',
      height:'100%',
     
      justifyContent:'center'

    },
    textContainer:{
      flexGrow:1,
      width:'100%',
      flexDirection:'row',
     
    },
  
   
    title:{
        fontSize:10,
      paddingLeft:15
    },
    subtitle:{
      fontSize:16,
      paddingLeft:15,
    
    },
    photo:{
        width:'100%',
        height:'95%'
    }
   
  
   
  });