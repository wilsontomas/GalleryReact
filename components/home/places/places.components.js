import {placeStyles } from './places.style'
import { Text, View,ScrollView } from 'react-native';
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
        {testData.map((x)=><View key={x.index} style={placeStyles.items}>
          
          </View>)}
        </View>
      
      </ScrollView>
      
    </View>
  );
}
