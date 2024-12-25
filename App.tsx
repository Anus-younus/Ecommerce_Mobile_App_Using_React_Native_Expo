import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReorderScreen from './src/screens/ReorderScreen';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import AccountScreen from './src/screens/AccountScreen';
import Entypo from '@expo/vector-icons/Entypo';
import Material from '@expo/vector-icons/MaterialIcons';
import MaterialCommunity from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';


const MyHomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}
    initialRouteName='PRODUCTDETAILS'>
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PRODUCTDETAILS" component={ProductDetailsScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  const Tab = createBottomTabNavigator()
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/Poppins-Bold.ttf'),
  });
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#e96e6e"
        }}>
        <Tab.Screen
          name="HOME_STACK"
          component={MyHomeStack}
          options={{
            tabBarIcon: ({ size, focused, color }) => (<Entypo name="home" size={size} color={color} />)
          }}
        />
        <Tab.Screen
          name="REORDER"
          component={ReorderScreen}
          options={{
            tabBarIcon: ({ size, focused, color }) => (<Material name="reorder" size={size} color={color} />)
          }}
        />
        <Tab.Screen
          name="CART"
          component={CartScreen}
          options={{
            tabBarIcon: ({ size, focused, color }) => (<MaterialCommunity name="cart" size={size} color={color} />)
          }}
        />
        <Tab.Screen
          name="ACCOUNT"
          component={AccountScreen}
          options={{
            tabBarIcon: ({ size, focused, color }) => (<FontAwesome6 name="user" size={size} color={color} />)
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
