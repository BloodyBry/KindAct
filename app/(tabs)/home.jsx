import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const actsOfKindness = [
  "Compliment a stranger",
  "Pick up litter in your neighborhood",
  "Donate to a local food bank",
  "Help a neighbor with groceries",
  "Write a thank-you note to someone"
];

const Home = () => {
  const [act, setAct] = useState("");
  const opacity = useSharedValue(0);

  useEffect(() => {
    generateRandomAct();
  }, []);

  const generateRandomAct = () => {
    const randomAct = actsOfKindness[Math.floor(Math.random() * actsOfKindness.length)];
    setAct(randomAct);

    // Reset and animate the opacity
    opacity.value = 0;
    opacity.value = withTiming(1, {
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Act of Kindness</Text>
      <Animated.View style={[styles.actContainer, animatedStyle]}>
        <Text style={styles.actText}>{act}</Text>
      </Animated.View>
      <Button title="Get New Act" onPress={generateRandomAct} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  actContainer: {
    marginBottom: 16,
  },
  actText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Home;
