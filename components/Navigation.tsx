import { View, Text } from 'react-native';
import { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Pizza from '../screens/Pizzas/Pizzas';
import Cart from '../screens/Cart/Cart';

const Tab = createBottomTabNavigator()

const Navigation: FC<any> = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Pizza' component={Pizza} options={{
                tabBarIcon: (): any => {
                    <View></View>
                },
                tabBarLabel: ({ focused, children }) => <Text style={{
                    color: focused ? "#EA580C" : "#000",
                    fontWeight: focused ? "900" : "400",
                    fontSize: 16,
                    marginBottom: 15
                }}>{children}</Text>
            }} />

            <Tab.Screen name="Cart" component={Cart} options={{
                tabBarIcon: (): any => {
                    <View></View>
                },
                tabBarLabel: ({ focused, children }) => <Text style={{
                    color: focused ? "#EA580C" : "#000",
                    fontWeight: focused ? "900" : "400",
                    fontSize: 16,
                    marginBottom: 15
                }}>{children}</Text>
            }} />
        </Tab.Navigator>
    )
}

export default Navigation