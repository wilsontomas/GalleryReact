import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Header } from './layouts/header/Header.component'
import { Footer } from './layouts/footer/Footer.component';
import { styles } from './App.style';
import {NavComponent} from './components/navigation/NavComponent'
import { NavigationContainer } from '@react-navigation/native';
import StoreProvider from './services/store/StoreProvider';

export default function App() {

  return (
    <View style={styles.container}>
      <StoreProvider>
      <NavigationContainer>  
      <View style={styles.header}>
        <Header></Header>
      </View>
    <View style={styles.body}>
    <NavComponent  />
    </View>
     
      <View style={styles.footer}>
        <Footer></Footer>
      </View>
      
      </NavigationContainer>
      <StatusBar style="auto" />
      </StoreProvider>
    </View>
  );
}
