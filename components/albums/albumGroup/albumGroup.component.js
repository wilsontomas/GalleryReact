import { albumGroupStyles } from './albumGroup.style';
import { View,Text,ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { AlbumItem } from '../albumItem/albumItem.component';
export function AlbumGroup() {


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
  
        <Text style={[albumGroupStyles.title, { fontFamily: 'LexendGiga-Black'}]}>Albumes</Text>
        <Text style={[albumGroupStyles.subtitle, { fontFamily: 'LexendGiga-Black' }]}># albumes</Text>
      
        <ScrollView horizontal={true} style={albumGroupStyles.itemScroll}>
          <View style={albumGroupStyles.itemContainer}>
  
            <AlbumItem></AlbumItem>
           
          </View>
       
        </ScrollView>
  
      </View>
    );
  }
  