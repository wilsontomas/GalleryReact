import { View, Text, Image } from 'react-native';
import { albumItemStyles } from './albumItem.style';
import { useFonts } from 'expo-font';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native';
import { StoreContext } from '../../../services/store/StoreProvider';
import { types } from '../../../services/store/StoreReducer';

export function AlbumItem({images}) {
   // let imageLst = getImageData();
   const [imageLst,setImagenes] = useState([]);
   const [First,setFirst] = useState({});

   useEffect(()=>{
    setImagenes(images.data);
    setFirst(images.data[0])
   },[])
   
    const navigation=useNavigation();
    const [fontsLoaded] = useFonts({
        'LexendGiga-Black': require('../../../assets/fonts/LexendGiga-Black.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
   
    }, [fontsLoaded]);
    const [store,dispatch] = useContext(StoreContext);
    const {albumId,photoId}=store;
    const showPhoto =(id)=>{
        dispatch({
            types: types.photo,
            payload:id
          })
        navigation.navigate('ImageView')
    }
    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={albumItemStyles.container} onLayout={onLayoutRootView}>

            <View style={[albumItemStyles.titleContainer]}>
                <View style={albumItemStyles.cuadro}>
                    <View style={albumItemStyles.cuadrop}>
                    </View>
                </View>
                <View style={albumItemStyles.textContainer}>
                    <Text style={[albumItemStyles.subTittle, { fontFamily: 'LexendGiga-Black' }]}>Lorem Ipsum  </Text>
                    <Text style={[albumItemStyles.subTittle2, { fontFamily: 'LexendGiga-Black' }]}>Lorem Ipsum ihhhhhhhhhhhhhhhhhhhhhhhhhsjjjjjjjj simply dummy. </Text>
                </View>
            </View>
            <View style={[albumItemStyles.pictureContainer]}>

                <View style={albumItemStyles.pictureSubContainer1}>
                    <View style={albumItemStyles.bigImgContainer}>
                    <TouchableOpacity onPress={() => showPhoto(First.id)}>
                          <Image source={{uri:First?.thumbnailUrl+".png"}} style={albumItemStyles.bigImg}  />
                    </TouchableOpacity>
                    </View>

                </View>
                <View style={albumItemStyles.pictureSubContainer2}>
                    {imageLst.slice(1).map(ImageObject=>
                    <View key={ImageObject.id} style={[albumItemStyles.smallImgContainer]}>
                        <TouchableOpacity onPress={() => showPhoto(ImageObject.id)}>
                          <Image source={{uri:ImageObject.thumbnailUrl+".png"}} style={albumItemStyles.smallImg}  />
                        </TouchableOpacity>
                    </View>)}

                   

                </View>
            </View>
        </View>
    );
   
}
