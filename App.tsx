import { StatusBar } from 'expo-status-bar';
import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PizzaDetails from './screens/Pizzas/PizzaDetails';
import Home from './screens/Home';

const Stack = createStackNavigator()

const App: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Детали' component={PizzaDetails} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

export default App;