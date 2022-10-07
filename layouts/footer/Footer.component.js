import { footerStyle } from './Footer.style';
import { Text, View } from 'react-native';
import { opciones } from '../../data/options.data';

export function Footer() {
  return (
    <View style={footerStyle.container}>

      {opciones.map((op)=><View key={op.index} style={footerStyle.options}><Text>Hello</Text></View>)}
    
      
    </View>
  );

}
