import { albumGroupStyles } from './albumGroup.style';
import { View, Text, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { AlbumItem } from '../albumItem/albumItem.component';
export function AlbumGroup() {
  let cantidad=new Array(10).fill(0);

  const [fontsLoaded] = useFonts({
    'LexendGiga-Black': require('../../../assets/fonts/LexendGiga-Black.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {

  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const renderItem = ({ item }) => (
    <AlbumItem style={albumGroupStyles.item}></AlbumItem>
  );

  return (
    <View style={[albumGroupStyles.container]} onLayout={onLayoutRootView}>
      <View style={albumGroupStyles.textContainer}>
        <Text style={[albumGroupStyles.title, { fontFamily: 'LexendGiga-Black' }]}>Albumes</Text>
        <Text style={[albumGroupStyles.subtitle, { fontFamily: 'LexendGiga-Black' }]}># albumes</Text>

      </View>

      <View style={albumGroupStyles.scrollContainer}>
      <FlatList
        data={cantidad}
        renderItem={renderItem}
        
      />
      
      </View>


    </View>
  );
}
