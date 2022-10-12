import {placeStyles } from './places.style'
import { Text, View,ScrollView,Image } from 'react-native';
import { testData } from '../../../data/default.data';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
export function Places() {
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
  return (
    <View style={placeStyles.container} onLayout={onLayoutRootView}>
        <Text  style={[placeStyles.title,{ fontFamily: 'LexendGiga-Black' }]}>Lugares visitados</Text>
      <ScrollView horizontal={true} style={placeStyles.itemScroll}>
        <View style={placeStyles.itemContainer}>
       
          <View  style={placeStyles.items}>
        <Image style={placeStyles.images} source={require('../../../assets/inicio/LaAltagracia.jpg')} />
        <Text style={[placeStyles.texto,{ fontFamily: 'LexendGiga-Black' }]}>La Altagracia</Text>
          </View>

          <View  style={placeStyles.items}>
        <Image style={placeStyles.images} source={require('../../../assets/inicio/LaRomana.jpg')} />
        <Text style={[placeStyles.texto,{ fontFamily: 'LexendGiga-Black' }]}>La Romana</Text>
          </View>

          <View  style={placeStyles.items}>
        <Image style={placeStyles.images} source={require('../../../assets/inicio/HatoMayor.jpg')} />
        <Text style={[placeStyles.texto,{ fontFamily: 'LexendGiga-Black' }]}>Hato Mayor</Text>
          </View>

          <View  style={placeStyles.items}>
        <Image style={placeStyles.images} source={require('../../../assets/inicio/LaRomana.jpg')} />
        <Text style={[placeStyles.texto,{ fontFamily: 'LexendGiga-Black' }]}>La Romana</Text>
          </View>

          <View  style={placeStyles.items}>
        <Image style={placeStyles.images} source={require('../../../assets/inicio/HatoMayor.jpg')} />
        <Text style={[placeStyles.texto,{ fontFamily: 'LexendGiga-Black' }]}>Hato Mayor</Text>
          </View>


        </View>
      
      </ScrollView>
      
    </View>
  );
}
