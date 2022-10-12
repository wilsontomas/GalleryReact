import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {Header} from './layouts/header/Header.component'
import { Footer } from './layouts/footer/Footer.component';
import { styles } from './App.style';
import { Home } from './components/home/home.components';
import { Album } from './components/albums/album.component';
export default function App() {
  return (
    <View style={[styles.container]}>
      <View style={styles.header}>
      <Header></Header>
      </View>
      <View style={styles.body}>
     <Album></Album>
      </View>
    
      <View style={styles.footer}>
      <Footer></Footer>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
