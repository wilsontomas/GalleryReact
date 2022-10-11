import { msnStyles } from './msn.style';
import { Text, View,ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
export function Msn() {
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
    <View style={msnStyles.container} onLayout={onLayoutRootView}>
        <Text  style={[msnStyles.title,{ fontFamily: 'LexendGiga-Black' }]}>Informacion</Text>
        <View style={msnStyles.itemContainer}>
           
            <View style={msnStyles.info}>
              <Text style={[msnStyles.content,{ fontFamily: 'LexendGiga-Black' }]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
            </View>
            <View style={msnStyles.image}>
              <Text>Imagen</Text>
            </View>
        </View>
     
      
    </View>
  );
}
