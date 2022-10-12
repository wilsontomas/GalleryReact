import { View, Text, Image } from 'react-native';
import { albumItemStyles } from './albumItem.style';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
export function AlbumItem() {


    const [fontsLoaded] = useFonts({
        'LexendGiga-Black': require('../../../assets/fonts/LexendGiga-Black.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {

    }, [fontsLoaded]);

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
                <View style={albumItemStyles.bigImg}>
                   
                </View>
                </View>
                <View style={albumItemStyles.pictureSubContainer2}>
                <View style={[albumItemStyles.smallImg,{backgroundColor:'yellow'}]}>
                   
                   </View>
                   <View style={[albumItemStyles.smallImg,{backgroundColor:'yellow'}]}>
                   
                   </View>
                   <View style={[albumItemStyles.smallImg,{backgroundColor:'green'}]}>
                   
                   </View>
                   <View style={[albumItemStyles.smallImg,{backgroundColor:'gray'}]}>
                   
                   </View>
                </View>
            </View>
        </View>
    );
    /*
     <View style={[albumItemStyles.titleContainer]}>
                <View style={albumItemStyles.cuadro}>

                </View>
                <View style={albumItemStyles.textContainer}>
                    <Text style={[albumItemStyles.subTittle, { fontFamily: 'LexendGiga-Black' }]}>Lorem Ipsum is </Text>
                    <Text style={[albumItemStyles.subTittle2, { fontFamily: 'LexendGiga-Black' }]}>Lorem Ipsum is simply dummy. </Text>
                </View>
            </View>
            <View style={albumItemStyles.pictureContainer}>
                <View style={albumItemStyles.pictureSubContainer1}>
                    <Text>Primero</Text>
                </View>
                <View style={albumItemStyles.pictureSubContainer2}>
                    <Text>Primero</Text>
                </View>
            </View>
    */
}
