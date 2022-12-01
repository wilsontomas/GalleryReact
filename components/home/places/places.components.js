import {placeStyles } from './places.style'
import { Text, View,ScrollView,Image } from 'react-native';
import { testData } from '../../../data/default.data';
import { useFonts } from 'expo-font';
import { useCallback, useContext } from 'react';

import Image1 from '../../../assets/Recursos2/inicio/LaAltagracia.svg'
import Image2 from '../../../assets/Recursos2/inicio/LaRomana.svg'
import Image3 from '../../../assets/Recursos2/inicio/HatoMayor.svg'
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../../../services/store/StoreProvider';
import { loadPlaces } from '../../services/albumService';
import { types } from '../../../services/store/StoreReducer';
import { TouchableOpacity } from 'react-native';

export function Places() {
  const [fontsLoaded] = useFonts({
    'LexendGiga-Black': require('../../../assets/fonts/LexendGiga-Black.ttf'),
  });
  const navigation = useNavigation();
  const onLayoutRootView = useCallback(async () => {
  
  }, [fontsLoaded]);
  const [store,dispatch] = useContext(StoreContext);

 const albumNavigate =(id)=>{
    dispatch({
      types: types.album,
      payload:id
    })
    console.log(id)
    navigation.navigate('Album')
  }
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={placeStyles.container} onLayout={onLayoutRootView}>
        <Text  style={[placeStyles.title,{ fontFamily: 'LexendGiga-Black' }]}>Lugares visitados</Text>
      <ScrollView horizontal={true} style={placeStyles.itemScroll}>
        <View style={placeStyles.itemContainer}>
       
        {loadPlaces.map(item=>{
          return (
            <View key={item.id} style={placeStyles.items} >
               <TouchableOpacity onPress={() =>  albumNavigate(item.id)}>
               <Image source={{uri:item.url}} style={placeStyles.images}  />
           
               </TouchableOpacity>
            <Text style={[placeStyles.texto,{ fontFamily: 'LexendGiga-Black' }]}>{item.text}</Text>
              </View>
          )
        })}
        

      



        </View>
      
      </ScrollView>
      
    </View>
  );
}
