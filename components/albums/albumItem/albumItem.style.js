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
    backgroundColor: 'red'

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
   backgroundColor:'yellow',
  

  },
  pictureSubContainer1: {
    flexGrow: 1,
    backgroundColor: 'blue',
    height: 200
  },
  pictureSubContainer2: {
    flexGrow: 1,
    backgroundColor: 'red',
    height: 200
  }

});