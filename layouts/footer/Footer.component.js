import { footerStyle } from './Footer.style';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import Category from '../../assets/Recursos2/navBar/Category.svg'
import Settings from '../../assets/Recursos2/navBar/Settings.svg'
import Vector1 from '../../assets/Recursos2/navBar/Vector-1.svg'
import Vector2 from '../../assets/Recursos2/navBar/Vector-2.svg'
export function Footer() {
  return (
    <View style={footerStyle.container}>


      <View style={footerStyle.options}>

        <Category style={footerStyle.images} />
      </View>
      <View style={footerStyle.options}>

        <Settings style={footerStyle.images} />
      </View>
      <View style={footerStyle.options}>

        <Feather style={footerStyle.images} name="plus-circle" size={45} color="black" />
      </View>

      <View style={footerStyle.options}>

        <Vector1 style={footerStyle.images} />
      </View>

      <View style={footerStyle.options}>
        <Vector2 style={footerStyle.images} />
      </View>

    </View>
  );

}
