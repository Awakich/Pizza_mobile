import { StatusBar } from 'expo-status-bar';
import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './components/Navigation';
import Navbar from './components/Navbar';

const App: FC = () => {
  return (
    <NavigationContainer>
      <Navigation />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;