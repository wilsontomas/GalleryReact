import { recentStyles } from './recents.style'; 
import { ScrollView, Text, View,Image, ImageBackground } from 'react-native';
import { recentData } from '../../../data/default.data';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

export function Recents() {

  
  const [fontsLoaded] = useFonts({
    'LexendGiga-Black': require('../../../assets/fonts/LexendGiga-Black.ttf'),
  });
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  // {recentData.map((x)=>{ })}
  return (
    <View style={[recentStyles.container]} onLayout={onLayoutRootView}>
     
     <Text  style={[recentStyles.title,{ fontFamily: 'LexendGiga-Black' }]}>Recientes</Text>
      <ScrollView horizontal={true} style={recentStyles.itemScroll}>
        <View style={recentStyles.itemContainer}>
      
       <View  style={recentStyles.items}>
            <Image style={recentStyles.images} source={require('../../../assets/inicio/recentAlbum1.jpg')} />
             
              
              <Text style={[recentStyles.texto,{ fontFamily: 'LexendGiga-Black' }]}>Wilson</Text>
          </View>
          <View  style={recentStyles.items}>
            <Image style={recentStyles.images} source={require('../../../assets/inicio/recentAlbum2.jpg')}/>
              <Text style={[recentStyles.texto,{ fontFamily: 'LexendGiga-Black' }]}>Eduardo</Text>
             
          </View>
        </View>
        <View  style={recentStyles.items}>
            <Image style={recentStyles.images} source={require('../../../assets/inicio/recentAlbum3.jpg')}/>
              <Text style={[recentStyles.texto,{ fontFamily: 'LexendGiga-Black' }]}>Tomas</Text>
              
          </View>
          <View  style={recentStyles.items}>
            <Image style={recentStyles.images} source={require('../../../assets/inicio/recentAlbum4.jpg')}/>
              <Text style={[recentStyles.texto,{ fontFamily: 'LexendGiga-Black' }]}>Alcantara</Text>
             
          </View>
          <View  style={recentStyles.items}>
            <Image style={recentStyles.images} source={require('../../../assets/inicio/recentAlbum1.jpg')}/>
              <Text style={[recentStyles.texto,{ fontFamily: 'LexendGiga-Black' }]}>Hola</Text>
            
          </View>
      </ScrollView>
     
    </View>
  );
}
