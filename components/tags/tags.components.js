import { tagStyles } from './tags.style'; 
import { Text, View, ScrollView } from 'react-native';
import { testData } from '../../data/default.data';
export function Tags() {
  return (
    <View style={tagStyles.container}>
   
      <Text  style={tagStyles.title}>Tags</Text>
      <ScrollView horizontal={true} style={tagStyles.itemScroll}>
        <View style={tagStyles.itemContainer}>
        {testData.map((x)=><View key={x.index} style={tagStyles.items}><Text>Tags</Text></View>)}
        </View>
      
      </ScrollView>
    </View>
  );
}
