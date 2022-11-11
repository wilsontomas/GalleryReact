
import { Home } from '../home/home.components';
import { Album } from '../albums/album.component';
import { ImageView } from '../imageView/imageView.component';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

export function NavComponent() {
  
const Stack = createNativeStackNavigator();

  return (
      
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Album" component={Album} />
            <Stack.Screen name="ImageView" component={ImageView} />
          </Stack.Navigator>
     
   
  );
}
