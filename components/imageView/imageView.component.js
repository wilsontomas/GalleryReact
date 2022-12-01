import { imageViewStyles } from './imageView.style';
import { View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback, useContext, useEffect, useState } from 'react';

import { Loader } from '../services/loader/loader.component';
import useIsReady from '../services/isReady';
import { StoreContext } from '../../services/store/StoreProvider';
import { loadPhotoById } from '../services/albumService';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
export function ImageView() {
 
  const [fontsLoaded] = useFonts({
    'LexendGiga-Black': require('../../assets/fonts/LexendGiga-Black.ttf'),
  });
  const isReady = useIsReady();

  const onLayoutRootView = useCallback(async () => {

  }, [fontsLoaded]);
  const [store,dispatch] = useContext(StoreContext);
  const {albumId,photoId}=store;
  const [photo,setPhoto] = useState({});
  useEffect(()=>{
    loadPhotoById(photoId).then((response) => response.json()).then(data=>{
      setPhoto(data);
      
    });
  },[]);
  if (!fontsLoaded) {
    return null;
  }
  
  if (isReady ) {
    return (
      <View style={[imageViewStyles.container]} onLayout={onLayoutRootView}>
        <View style={imageViewStyles.photoContainer}>
              <Image source={{uri:photo?.thumbnailUrl+".png"}} style={imageViewStyles.photo}  />
        </View>
      </View>
    );
  }
  
  return (
    <Loader/>
  );
 
}
