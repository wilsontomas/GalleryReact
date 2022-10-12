import { StyleSheet } from "react-native";


export const albumItemStyles = StyleSheet.create({
    container: {
     flex:1,
        backgroundColor: 'red',
        
      },
      
      itemContainer:{
       
      },
      itemScroll:{
        flexGrow:7
      },
      titleContainer:{
        flexGrow:1,
       flexDirection:'row',
    
        height:20,
      
       marginBottom:20,
        backgroundColor:'gray'
        
      },

      title:{
        
        paddingLeft:15
      },
     
      cuadro:{
        
        backgroundColor:'blue',
       flexGrow:1,
       height:20
  
      },
      textContainer:{
        flexGrow:1
      },
      subTittle:{
        fontSize:13
      },
      subTittle2:{
        fontSize:8,
      },
      pictureContainer:{
       
        flexDirection:'row',
        
       
      },
      pictureSubContainer1:{
        flexGrow:1,
        backgroundColor:'blue',
        height:200
      },
      pictureSubContainer2:{
        flexGrow:1,
        height:200
      }
   
  });