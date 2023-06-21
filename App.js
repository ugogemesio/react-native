import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Main from "./src/components/Main"
import Navbar from './src/components/NavBar';
import Estilo from './src/components/Estilo';

export default function App() {
  return (

    <View >
      <Navbar/>
      <Main  />
    </View>
  );
}