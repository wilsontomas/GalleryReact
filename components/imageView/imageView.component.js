import { imageViewStyles } from './imageView.style';
import { View, Text, Image, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import Image1 from '../../assets/Recursos2/detalleAlbum/Component 9.svg'
export function ImageView() {
 

  const [fontsLoaded] = useFonts({
    'LexendGiga-Black': require('../../assets/fonts/LexendGiga-Black.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {

  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[imageViewStyles.container]} onLayout={onLayoutRootView}>
      <View style={imageViewStyles.textContainer}>
        <Text style={[imageViewStyles.title, { fontFamily: 'LexendGiga-Black' }]}>
        <Ionicons name="arrow-back" size={32} color="black" />
            </Text>
        <Text style={[imageViewStyles.subtitle, { fontFamily: 'LexendGiga-Black' }]}>Instagram album</Text>

      </View>

      <View style={imageViewStyles.photoContainer}>
     
        <Image1 style={imageViewStyles.photo} />
      </View>


    </View>
  );
}
