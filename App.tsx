/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Inicio from './views/inicio';
import Detalle from './views/detalle';
import Bienvenida from './views/bienvenida';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pantalla de Bienvenida" component={Bienvenida} />
        <Stack.Screen name="Listado de Pokémon" component={Inicio} />
        <Stack.Screen name="Detalle de Pokémon" component={Detalle} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
