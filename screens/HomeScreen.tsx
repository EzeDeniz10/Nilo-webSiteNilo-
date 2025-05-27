
import React, { useRef } from 'react';
import { Dimensions } from 'react-native';
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Animated,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types/navigation';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Welcome } from '@/components/Welcome';

import Button from '../components/Button';
import TextButton from '../components/TextButton';
import Navbar from '@/components/Navbar';
import CustomCard from '@/components/CustomCard';
import cardsData from '../data/cardsData';
import ParallaxScrollView from '@/components/ParallaxScrollView';


type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={{ flex: 1 }}>
      <Navbar title="Inicio" scrollY={scrollY} />

           <ParallaxScrollView
        headerImage={
          <Image
          source={require('../assets/images/image17.jpg')}
            style={styles.reactLogo}
          />
        }
        headerBackgroundColor={{ light: '#fff', dark: '#222' }}
        headerHeight={200}
      >
        {/* ...todo el contenido que estaba dentro del ScrollView... */}
      </ParallaxScrollView>
        <Welcome />

        <Image
          source={require('../assets/images/image17.jpg')}
          style={styles.reactLogo}
        />

        <Image
          source={require('../assets/images/iniciar_sesion.jpg')}
          style={styles.bannerImage}
          resizeMode="contain"
        />

        <View style={styles.buttonContainer}>
          <Button title="Botón Primario" onPress={() => alert('Presionado')} disabled={undefined} />
          <Button title="Deshabilitado" onPress={() => {}} disabled />
          <TextButton title="Solo texto" onPress={() => alert('Texto Presionado')} disabled={undefined} />
        </View>

        {cardsData.map((card, index) => (
          <React.Fragment key={index}>
            <CustomCard
              title={card.title}
              description={card.description}
              imageSource={card.imageSource}
            />
            <ThemedView style={styles.titleContainer}>
              <ThemedText type="title">Welcome!</ThemedText>
              <HelloWave />
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
              <ThemedText type="subtitle">Step 1: Try it</ThemedText>
              <ThemedText>
                Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
                Press{' '}
                <ThemedText type="defaultSemiBold">
                  {Platform.select({
                    ios: 'cmd + d',
                    android: 'cmd + m',
                    web: 'F12',
                  })}
                </ThemedText>{' '}
                to open developer tools.
              </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
              <ThemedText type="subtitle">Step 2: Explore</ThemedText>
              <ThemedText>
                Tap the Explore tab to learn more about what's included in this starter app.
              </ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
              <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
              <ThemedText>
                When you're ready, run{' '}
                <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
                <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
                <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
                <ThemedText type="defaultSemiBold">app-example</ThemedText>.
              </ThemedText>
            </ThemedView>
          </React.Fragment>
        ))}
      </View>
  );
}

const { width, height } = Dimensions.get('window');

console.log('Ancho:', width);
console.log('Alto:', height);

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  bannerImage: {
    width: '100%',
    height: 150,
    marginVertical: 16,
  },
  buttonContainer: {
    padding: 20,
    gap: 12,
  },
});
