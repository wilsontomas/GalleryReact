import { homeStyles } from './home.style';
import { View } from 'react-native';
import { Places } from '../places/places.components'; 
import { Recents } from '../recents/recents.components'
import { Tags } from '../tags/tags.components';
export function Home() {
  return (
    <View style={homeStyles.container}>
     <Recents style={homeStyles.items}></Recents>
      <Tags style={homeStyles.items}></Tags>
      <Places style={homeStyles.items}></Places>
    </View>
  );
}
