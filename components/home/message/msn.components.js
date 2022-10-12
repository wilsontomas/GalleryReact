import { msnStyles } from './msn.style';
import { Text, View,Image } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

export function Msn() {
  const [fontsLoaded] = useFonts({
    'LexendGiga-Black': require('../../../assets/fonts/LexendGiga-Black.ttf'),
  });
  
  const onLayoutRootView = useCallback(async () => {
   
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={msnStyles.container} onLayout={onLayoutRootView}>
       
        <View style={msnStyles.itemContainer}>
        <View style={msnStyles.imageContainer}>
              <Image 
              source={require('../../../assets/inicio/Welcome.jpg')}
               style={msnStyles.imageS}/>

            
            </View>
            <View style={msnStyles.info}>
              <Text style={[msnStyles.content,{ fontFamily: 'LexendGiga-Black' }]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
            </View>
           
        </View>
     
      
    </View>
  );
}
