import { footerStyle } from './Footer.style';
import { Text, View,Image } from 'react-native';
import { opciones } from '../../data/options.data';

export function Footer() {
  return (
    <View style={footerStyle.container}>

     
        <View  style={footerStyle.options}>
        <Image style={footerStyle.images} source={require('../../assets/navBar/Category.jpg')} />
      </View>
      <View  style={footerStyle.options}>
        <Image style={footerStyle.images} source={require('../../assets/navBar/Settings.jpg')} />
      </View>
      <View  style={footerStyle.options}>
        <Image style={footerStyle.images} source={require('../../assets/navBar/center.jpg')} />
      </View>
      <View  style={footerStyle.options}>
        <Image style={footerStyle.images} source={require('../../assets/navBar/Vector-1.jpg')} />
      </View>
      <View  style={footerStyle.options}>
        <Image style={footerStyle.images} source={require('../../assets/navBar/Vector-2.jpg')} />
      </View>
      
    </View>
  );

}
