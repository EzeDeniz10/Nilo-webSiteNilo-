import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import type { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
type DetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;

type Props = {
  route: DetailsScreenRouteProp;
};

export default function DetailsScreen({ route }: Props) {
  const navigation = useNavigation<DetailsScreenNavigationProp>();
  const { title, description, imageSource } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Volver" onPress={() => navigation.goBack()} />
      </View>
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
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
});
