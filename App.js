

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loja from './Loja';
import Banner from './Banner';
import Detalhe from './Detalhe';
import Signin from './login';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signin'>

        <Stack.Screen name="Login" component={Signin} options={{headerShown:false}}/>
        <Stack.Screen name="Cabeçalho de Página inicial" component={Loja} />
        <Stack.Screen name="Banner" component={Banner} />
        <Stack.Screen name="Detalhes" component={Detalhe} />
        
      </Stack.Navigator>
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