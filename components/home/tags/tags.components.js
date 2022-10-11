import { tagStyles } from './tags.style'; 
import { Text, View, ScrollView } from 'react-native';
import { testData } from '../../../data/default.data';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
export function Tags() {
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
    <View style={tagStyles.container} onLayout={onLayoutRootView}>
   
      <Text  style={[tagStyles.title,{ fontFamily: 'LexendGiga-Black' }]}>Tags</Text>
      <ScrollView horizontal={true} style={tagStyles.itemScroll}>
        <View style={tagStyles.itemContainer}>
        {testData.map((x)=><View key={x.index} style={tagStyles.items}>
        
          </View>)}
        </View>
      
      </ScrollView>
    </View>
  );
}
