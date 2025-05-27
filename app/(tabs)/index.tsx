import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom', // Transición similar a la que usabas
          gestureEnabled: true,
        }}
      />
    </GestureHandlerRootView>
  );
}
