import { StyleSheet } from "react-native";


export const recentStyles = StyleSheet.create({
    container: {
      flexGrow:1,
      backgroundColor: '#fff',
      
    },
    itemScroll:{ 
       backgroundColor:'yellow',
      
    },
    itemContainer:{
     
     flexDirection:'row',
     alignItems:'center'
      
    },
    items:{
      
    
      height:75,
      width:90,
      backgroundColor:'white',
      borderRadius:20,
       margin:5
      
         
    },
    title:{
      paddingTop:40,
      paddingLeft:15
    }
   
  });