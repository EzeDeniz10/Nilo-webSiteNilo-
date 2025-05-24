import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
// Update the import path if your types file is in a different location, for example:
import type { RootStackParamList } from '../src/navigation/types';
// Or create the file at src/navigation/types.ts and export RootStackParamList from there.

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type Props = {
  route: DetailsScreenRouteProp;
};

export default function DetailsScreen({ route }: Props) {
  const { title, description, imageSource } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 15,
    fontSize: 16,
    color: '#444',
  },
});
