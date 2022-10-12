import { StyleSheet } from "react-native";


export const albumItemStyles = StyleSheet.create({
  container: {
    flex: 1,
   
    flexDirection: 'row',

    width:380,
    flexWrap:'wrap',
    alignItems:'flex-start',
   
    padding:5
  },
  itemContainer: {

  },
  itemScroll: {
    flexGrow: 7
  },
  titleContainer: {
   flexGrow:1,
   
    flexDirection:'row',
    height:100,
   

  },

  title: {

    paddingLeft: 15
  },

  cuadro: {

   
    flexGrow: 1,
   

  },
  cuadrop:{
    backgroundColor: 'blue',
    borderRadius:20,
    height: 80,
    width:80,
    margin:5
  },
  textContainer: {
    flexGrow: 1
  },
  subTittle: {
    fontSize: 13
  },
  subTittle2: {
    fontSize: 8,
    width:'60%'
  },
  pictureContainer: {
    flex:1,
    flexDirection: 'row',
 
  

  },
  pictureSubContainer1: {
    flexGrow: 1,
   
    height: 200,
    justifyContent:'center'
  },
  pictureSubContainer2: {
    flexGrow: 1,
   
    height: 200,
    flexDirection:'row',
    flexWrap:'wrap',
    width:30

  },
  bigImg:{
   
    height: 170,
    borderRadius:20,
    backgroundColor:'gray',
    margin:5
    
  },
  smallImg:{
    flexGrow: 1,
    height: 90,
    margin:5,
    width:60,
    borderRadius:20
  }

});