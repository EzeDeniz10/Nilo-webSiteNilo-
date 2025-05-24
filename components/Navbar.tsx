import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, View, StatusBar } from 'react-native';

type NavbarProps = {
  title: string;
  scrollY: Animated.Value; // Recibe el scroll para animar ocultamiento
};

const HEADER_HEIGHT = 60;

const Navbar: React.FC<NavbarProps> = ({ title, scrollY }) => {
  // Animar opacidad y posición con scrollY
  const translateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>{title}</Text>
    </Animated.View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
    backgroundColor: '#1D3D47',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    elevation: 5,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
