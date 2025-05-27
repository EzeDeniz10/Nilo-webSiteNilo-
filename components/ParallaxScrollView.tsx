import { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated';
import { ThemedView } from './ThemedView';
import { useBottomTabOverflow } from './ui/TabBarBackground';
// filepath: c:\Users\54341\Desktop\webSiteNilo\components\ParallaxScrollView.tsx

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
  headerHeight?: number;
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
  headerHeight = 250,
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();

  const headerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollOffset.value,
          [-headerHeight, 0, headerHeight],
          [-headerHeight / 2, 0, headerHeight * 0.75]
        ),
      },
      {
        scale: interpolate(scrollOffset.value, [-headerHeight, 0], [2, 1]),
      },
    ],
  }));

  return (
    <ThemedView style={styles.container}>
      {/* Background color layer */}
      <View
        style={[
          styles.header,
          {
            backgroundColor: headerBackgroundColor[colorScheme],
            position: 'absolute',
            width: '100%',
          },
        ]}
      />

      {/* Parallax image */}
      <Animated.View style={[styles.headerImage, { height: headerHeight }, headerAnimatedStyle]}>
        {headerImage}
      </Animated.View>

      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        scrollIndicatorInsets={{ bottom }}
        contentContainerStyle={{ paddingTop: headerHeight, paddingBottom: bottom }}
      >
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { height: 250 },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
});
