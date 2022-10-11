import { recentStyles } from './recents.style'; 
import { ScrollView, Text, View,Image } from 'react-native';
import { testData } from '../../../data/default.data';
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
  return (
    <View style={[recentStyles.container]} onLayout={onLayoutRootView}>
     
     <Text  style={[recentStyles.title,{ fontFamily: 'LexendGiga-Black' }]}>Recientes</Text>
      <ScrollView horizontal={true} style={recentStyles.itemScroll}>
        <View style={recentStyles.itemContainer}>
        {testData.map((x)=><View key={x.index} style={recentStyles.items}>
      
          </View>)}
        </View>
      
      </ScrollView>
      
    </View>
  );
}
