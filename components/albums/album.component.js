import { albumStyles } from './album.style';
import { View,Text } from 'react-native';
import { AlbumGroup } from './albumGroup/albumGroup.component'; 
import useIsReady from '../services/isReady';
import { Loader } from '../services/loader/loader.component';
export function Album() {
  const isReady = useIsReady();

  if (isReady ) {
    return( 
    <View style={albumStyles.container}>
      <AlbumGroup></AlbumGroup>
      </View>
      );
  }
  
  return (
    <Loader/>
  );
 
}
