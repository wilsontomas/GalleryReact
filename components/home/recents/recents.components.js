import { recentStyles } from './recents.style';
import { ScrollView, Text, View, Image, ImageBackground } from 'react-native';

import { useFonts } from 'expo-font';
import { useCallback } from 'react';

import Recent1 from '../../../assets/Recursos2/inicio/recentAlbum1.svg'
import Recent2 from '../../../assets/Recursos2/inicio/recentAlbum2.svg'
import Recent3 from '../../../assets/Recursos2/inicio/recentAlbum3.svg'
import Recent4 from '../../../assets/Recursos2/inicio/recentAlbum3.svg'
import { useNavigation } from '@react-navigation/native';

export function Recents() {

  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    'LexendGiga-Black': require('../../../assets/fonts/LexendGiga-Black.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
   
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  // {recentData.map((x)=>{ })}
  return (
    <View style={[recentStyles.container]} onLayout={onLayoutRootView}>

      <Text style={[recentStyles.title, { fontFamily: 'LexendGiga-Black' }]}>Recientes</Text>
      <ScrollView horizontal={true} style={recentStyles.itemScroll}>
        <View style={recentStyles.itemContainer}>

          <View style={recentStyles.items}>
                <Recent1 style={recentStyles.images}  onPress={() => navigation.navigate('Album')} />

            <Text style={[recentStyles.texto, { fontFamily: 'LexendGiga-Black' }]}>Wilson</Text>
          </View>
          <View style={recentStyles.items}>
          <Recent2 style={recentStyles.images}  onPress={() => navigation.navigate('Album')} />
            <Text style={[recentStyles.texto, { fontFamily: 'LexendGiga-Black' }]}>Eduardo</Text>

          </View>
        </View>
        <View style={recentStyles.items}>
        <Recent3 style={recentStyles.images}  onPress={() => navigation.navigate('Album')} />
          <Text style={[recentStyles.texto, { fontFamily: 'LexendGiga-Black' }]}>Tomas</Text>

        </View>
        <View style={recentStyles.items}>
        <Recent4 style={recentStyles.images}  onPress={() => navigation.navigate('Album')} />
          <Text style={[recentStyles.texto, { fontFamily: 'LexendGiga-Black' }]}>Alcantara</Text>

        </View>
        <View style={recentStyles.items}>
        <Recent1 style={recentStyles.images}  onPress={() => navigation.navigate('Album')} />
          <Text style={[recentStyles.texto, { fontFamily: 'LexendGiga-Black' }]}>Hola</Text>

        </View>
      </ScrollView>

    </View>
  );
}
