import { StyleSheet } from "react-native";


export const inicioStyle = StyleSheet.create({
    container: {
      flexGrow:1,
      backgroundColor: '#fff',
      
    },
    header:{ 
     backgroundColor:'blue',
     flexGrow:1,
     height:150,
     width:'100%'
      
    },
    body:{
     
     backgroundColor:'white',
     flexGrow:8,
     height:450,
     width:'100%'
    },
    items:{
      
      
      height:75,
      width:90,
      
      borderRadius:20,
       margin:5,
       alignItems:'center'
      
         
    },
    btn:{
        color:'black'
    },
    title:{
      paddingTop:40,
      paddingLeft:15,
      color:'white',
      fontSize:40,
      marginVertical:10
    },
    images:{
      width:75,
      height:75,
      opacity: 0.8,
      
      
    },
    texto:{
      color:'white',
     zIndex:99,
     position:'absolute',
     fontSize:10,
    marginVertical:'50%'

    }
   
  });