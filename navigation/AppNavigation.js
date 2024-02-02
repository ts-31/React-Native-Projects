import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {BottomTabView, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignupScreen'
import HomeScreen from '../screens/HomeScreen'
import useAuth from '../hooks/useAuth'
import Account from '../screens/innerScreens/Account'
import Myorders from '../screens/innerScreens/MyOrders'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="MyOrders" component={Myorders}/>
      <Tab.Screen name="Account" component={Account}/>
    </Tab.Navigator>
  )
}

export default function AppNavigation() {
  const { user } = useAuth();
  return(
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="HomeTab" component={HomeTab} options={{headerShown: false}}/>
        ) : (
          <>
          <Stack.Screen name="Signup" component={SignUpScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}


// export default function AppNavigation(){
//   const {user} = useAuth();
//   if(user){
//     return (
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName='Home'>
//           <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
//         </Stack.Navigator>
//       </NavigationContainer>
//     )
//   }else{
//     return (
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName='Signup'>
//           <Stack.Screen name="Signup" component={SignUpScreen} options={{headerShown:false}}/>
//           <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
//           <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
//         </Stack.Navigator>
//       </NavigationContainer>
//     )
//   }
// }


const styles = StyleSheet.create({})