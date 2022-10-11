import {placeStyles } from './places.style'
import { Text, View,ScrollView } from 'react-native';
import { testData } from '../../../data/default.data';
export function Places() {
  return (
    <View style={placeStyles.container}>
        <Text  style={placeStyles.title}>Recientes</Text>
      <ScrollView horizontal={true} style={placeStyles.itemScroll}>
        <View style={placeStyles.itemContainer}>
        {testData.map((x)=><View key={x.index} style={placeStyles.items}><Text>Data</Text></View>)}
        </View>
      
      </ScrollView>
      
    </View>
  );
}
