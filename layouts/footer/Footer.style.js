import { StyleSheet} from 'react-native';

export const footerStyle = StyleSheet.create({
    container: {
      flex:1,
      flexDirection:'row',
      backgroundColor: 'red',
      alignItems: 'center',
      
    },
    options:{
      flexGrow:1,
      height:75,
      width:30,
      backgroundColor:'white',
      borderRadius:50,
      justifyContent:'center',
      alignItems:'center'
         
    },
    icon:{

    }
  });