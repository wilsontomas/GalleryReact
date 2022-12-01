import { albumGroupStyles } from './albumGroup.style';
import { View, Text, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback, useContext } from 'react';
import { AlbumItem } from '../albumItem/albumItem.component';
import { StoreContext } from '../../../services/store/StoreProvider';
export function AlbumGroup() {
  let cantidad=new Array(10).fill(0);
  const [store,dispatch] = useContext(StoreContext);
  const {albumId,photoId}=store;
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
        <Text style={[albumGroupStyles.subtitle, { fontFamily: 'LexendGiga-Black' }]}># {albumId}/{photoId}</Text>

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
