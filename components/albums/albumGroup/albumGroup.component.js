import { albumGroupStyles } from './albumGroup.style';
import { View, Text, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback, useContext,useEffect, useState } from 'react';
import { AlbumItem } from '../albumItem/albumItem.component';
import { StoreContext } from '../../../services/store/StoreProvider';
import { loadAlbumById } from '../../services/albumService';
export function AlbumGroup() {
  let cantidad=new Array(10).fill(0);
  const [store,dispatch] = useContext(StoreContext);
  const {albumId,photoId}=store;
  const [images,setImages] = useState([]);
  const [imagegroups,setImagesgroups] = useState([]);
  const [albumSize,setAlbumSize] = useState(7);
  useEffect(()=>{
    loadAlbumById(albumId).then((response) => response.json()).then(data=>{
     
      setImages(data)
      let end =5;
      let initial=0;
      let arreglo=[];
      for(var i=0;i<albumSize;i++){
        let grupo ={
          albumId:albumId,
          data:data.slice(initial,end)
        }

        arreglo.push(grupo);
        initial+=5;
        end+=5;
      }
      setImagesgroups(arreglo)
     
  });
   
  },[])
  
  const [fontsLoaded] = useFonts({
    'LexendGiga-Black': require('../../../assets/fonts/LexendGiga-Black.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {

  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const renderItem = ({ item }) => (
    <AlbumItem style={albumGroupStyles.item} images={item}></AlbumItem>
  );
  
  return (
    <View style={[albumGroupStyles.container]} onLayout={onLayoutRootView}>
      <View style={albumGroupStyles.textContainer}>
        <Text style={[albumGroupStyles.title, { fontFamily: 'LexendGiga-Black' }]}>Albumes</Text>
        <Text style={[albumGroupStyles.subtitle, { fontFamily: 'LexendGiga-Black' }]}># {albumId}/{albumSize*5}</Text>

      </View>

      <View style={albumGroupStyles.scrollContainer}>
      <FlatList
        data={imagegroups}
        renderItem={renderItem}
        
      />
      
      </View>


    </View>
  );
}
