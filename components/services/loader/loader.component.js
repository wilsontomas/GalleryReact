
import { View,Text,Animated,Easing } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { loaderStyles } from './loader.style';


export function Loader() {
  
const spinValue = new Animated.Value(0);

Animated.loop(
  Animated.timing(spinValue, {
    toValue: 1,
    duration: 2500,
    easing: Easing.linear,
    useNativeDriver: true,
  }),
).start(() => {
  spinValue.setValue(0);
});
const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <Animated.View style={[loaderStyles.container,{ transform: [{ rotate: spin }] }]}>
         <Feather name="loader" size={90} color="black" />
     </Animated.View>
  );
 
}
