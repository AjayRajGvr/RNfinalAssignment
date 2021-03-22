import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import {Button} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import TodoScreen from './src/screens/TodoScreen/TodoScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import ImagePick from './src/components/ImagePicker';
import RegistrationScreen from './src/screens/RegistrationScreen/RegistrationScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import GetLocation from './src/screens/LocationScreen/LocationScreen';


const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  


  return (
    <NavigationContainer>
      <Stack.Navigator>
        { user ? (
          <Stack.Screen name="Home" component={HomeScreen}/>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name='ImagePicker' component={ImagePick} />
            <Stack.Screen name='Todo' component={TodoScreen} />
            <Stack.Screen name='Get location' component={GetLocation} />
            <Stack.Screen name="Home" component={HomeScreen}/>
         
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}