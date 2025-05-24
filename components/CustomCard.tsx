import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
// ...existing code...
import { RootStackParamList } from '../types/navigation';
// filepath: c:\Users\54341\Desktop\webSiteNilo\screens\HomeScreen.tsx
// ...existing code... // Asegúrate que este archivo existe

type CustomCardProps = {
  title: string;
  description: string;
  imageSource: React.ReactNode;
};

export default function CustomCard({ title, description, imageSource }: CustomCardProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  const goToDetails = () => {
    navigation.navigate("Details", { title, description, imageSource });
  };

  return (
    <View style={styles.card}>
      <Image source={imageSource as any} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {expanded && <Text style={styles.description}>{description}</Text>}
        <View style={styles.buttons}>
          <TouchableOpacity onPress={toggleExpand} style={styles.button}>
            <Text style={styles.buttonText}>{expanded ? "Show Less" : "Learn More"}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToDetails} style={[styles.button, styles.detailsButton]}>
            <Text style={[styles.buttonText, styles.detailsButtonText]}>Go to Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 180,
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    color: "#555",
  },
  buttons: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#3498db",
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  detailsButton: {
    backgroundColor: "#2ecc71",
  },
  detailsButtonText: {
    fontWeight: "700",
  },
});