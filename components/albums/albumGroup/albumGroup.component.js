import { albumGroupStyles } from './albumGroup.style';
import { View, Text, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { AlbumItem } from '../albumItem/albumItem.component';
export function AlbumGroup() {
  const cantidad=[1,2,3,4];

  const [fontsLoaded] = useFonts({
    'LexendGiga-Black': require('../../../assets/fonts/LexendGiga-Black.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {

  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[albumGroupStyles.container]} onLayout={onLayoutRootView}>
      <View style={albumGroupStyles.textContainer}>
        <Text style={[albumGroupStyles.title, { fontFamily: 'LexendGiga-Black' }]}>Albumes</Text>
        <Text style={[albumGroupStyles.subtitle, { fontFamily: 'LexendGiga-Black' }]}># albumes</Text>

      </View>

      <View style={albumGroupStyles.scrollContainer}>
       <ScrollView style={albumGroupStyles.Scroll}>
       {cantidad.map((x)=> <AlbumItem key={x} style={albumGroupStyles.item}></AlbumItem>)}
       
       </ScrollView>
      </View>


    </View>
  );
}
