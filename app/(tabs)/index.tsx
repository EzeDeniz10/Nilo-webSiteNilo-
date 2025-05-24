import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
// filepath: c:\Users\54341\Desktop\webSiteNilo\app\(tabs)\index.tsx
import DetailsScreen from '../../screens/DetailsScreen';
// filepath: c:\Users\54341\Desktop\webSiteNilo\app\(tabs)\index.tsxCorrección en la ruta
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Tipos para las rutas de navegación
export type RootStackParamList = {
  Home: undefined;
  Details: {
    title: string;
    description: string;
    imageSource: any;
  };
};

// Crear el stack de navegación
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ title: 'Detalle' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}