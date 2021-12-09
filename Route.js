import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './pages/Home';
import PageCodigo from './pages/PageCodigo';
import Result from './pages/Result';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './RouteService';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        name: 'home-outline'
    },
    PageCodigo: {
        name: 'qr-code-outline'
    },
    Result: {
        name: 'settings-outline'
    }
};

const TabNavigator = () => {
    return (
//        <NavigationContainer>
            <Tab.Navigator
            screenOptions={ ({route}) => ({
                tabBarIcon: ({ color, size }) => {
                    const { name } = icons[route.name];
                    return < Icon name={name} color={'black'} size={40} />
                }, 
                tabBarStyle: { backgroundColor: '#9CD497'},
                headerShown:false,
                tabBarShowLabel:false
            }) }
            >
                <Tab.Screen name='Home' component={Home}/> 
                <Tab.Screen name='PageCodigo' component={PageCodigo}/>
                <Tab.Screen name='Result' component={Result}/>
            </Tab.Navigator>


   //     </NavigationContainer>
    )
}



const Navigator = () => (
    <Stack.Navigator headerMode="none" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={TabNavigator} />
    <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
)

 
  // Navegador Principal
  export const AppNavigator = () => {

    return (
        <NavigationContainer ref={navigationRef}>
            <Navigator/>




        </NavigationContainer>

    )}




/*

import { createNativeStackNavigator } from '@react-navigation/native-stack';]

const Stack = createNativeStackNavigator();

const Route = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:true}}>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='PageCodigo' component={PageCodigo}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Route
*/