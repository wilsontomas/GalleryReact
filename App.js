import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Header} from './layouts/header/Header.component'
import { styles } from './App.style';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Header></Header>
      </View>
      <View style={styles.body}>
      <Text>Open up App.js to start working on your app!</Text>
      </View>
    
      <View style={styles.footer}>
      <Header></Header>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
