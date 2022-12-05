import {placeStyles } from './places.style'
import { Text, View,ScrollView,Image } from 'react-native';
import { testData } from '../../../data/default.data';
import { useFonts } from 'expo-font';
import { useCallback, useContext } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../../../services/store/StoreProvider';
import { loadAllAlbumType, loadPlaces } from '../../services/albumService';
import { types } from '../../../services/store/StoreReducer';
import { TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { useState } from 'react';

export function Places() {
  const [fontsLoaded] = useFonts({
    'LexendGiga-Black': require('../../../assets/fonts/LexendGiga-Black.ttf'),
  });
  const navigation = useNavigation();
  const onLayoutRootView = useCallback(async () => {
  
  }, [fontsLoaded]);
  const [store,dispatch] = useContext(StoreContext);
  const [albums,setAlbums] = useState([]);
  useEffect(()=>{
    loadAllAlbumType()
    .then(response => response.json())
    .then(json => {
      let newData =getArrayData(json);
      setAlbums(newData);
    })
  },[])

  const getArrayData=(data)=>{
    let id =1;
    let newData =[];
    for(let i=0;i<10;i++){
      let tempData = data.filter(res=>res.albumId==id)[0];
      newData.push(tempData);
      id++;
    }
    return newData;
  }
 const albumNavigate =(id)=>{
    dispatch({
      types: types.album,
      payload:id
    })
    
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
       
        {albums.map(item=>{
          return (
            <View key={item.id} style={placeStyles.items} >
               <TouchableOpacity onPress={() =>  albumNavigate(item.albumId)}>
               <Image source={{uri:item.thumbnailUrl}} style={placeStyles.images}  />
           
               </TouchableOpacity>
            <Text style={[placeStyles.texto,{ fontFamily: 'LexendGiga-Black' }]}>Ejemplo {item.albumId}</Text>
              </View>
          )
        })}

        
        

      



        </View>
      
      </ScrollView>
      
    </View>
  );
}
