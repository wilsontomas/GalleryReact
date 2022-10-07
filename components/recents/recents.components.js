import { recentStyles } from './recents.style'; 
import { ScrollView, Text, View } from 'react-native';
import { testData } from '../../data/default.data';
export function Recents() {
  return (
    <View style={recentStyles.container}>
     
     <Text  style={recentStyles.title}>Recientes</Text>
      <ScrollView horizontal={true} style={recentStyles.itemScroll}>
        <View style={recentStyles.itemContainer}>
        {testData.map((x)=><View key={x.index} style={recentStyles.items}><Text>Data</Text></View>)}
        </View>
      
      </ScrollView>
      
    </View>
  );
}
