import { headerStyle } from "./Header.style";
import { Text, View } from 'react-native';

export function Header() {
  return (
    <View style={headerStyle.container}>
      <Text style={headerStyle.logo}>Logo</Text>
      
    </View>
  );

}
