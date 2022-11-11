import { imageViewStyles } from './imageView.style';
import { View, Text, Image, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

import Image1 from '../../assets/Recursos2/detalleAlbum/Component 9.svg'
import { Loader } from '../services/loader/loader.component';
import useIsReady from '../services/isReady';
export function ImageView() {
 
  const [fontsLoaded] = useFonts({
    'LexendGiga-Black': require('../../assets/fonts/LexendGiga-Black.ttf'),
  });
  const isReady = useIsReady();

  const onLayoutRootView = useCallback(async () => {

  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  if (isReady ) {
    return (
      <View style={[imageViewStyles.container]} onLayout={onLayoutRootView}>
        <View style={imageViewStyles.photoContainer}>
          <Image1 style={imageViewStyles.photo} />
        </View>
      </View>
    );
  }
  
  return (
    <Loader/>
  );
 
}
