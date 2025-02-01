import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, LayoutAnimation } from 'react-native';

const IncorrectHeightAndroidSolution = () => {
  const [screenHeight, setScreenHeight] = useState(0);
  const viewRef = useRef(null);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setScreenHeight(window.height);
    });
    return () => subscription?.remove();
  }, []);

  const handleLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setScreenHeight(height);
  };

  return (
    <View style={styles.container} onLayout={handleLayout}>
      <Text>Screen Height (using onLayout): {screenHeight}</Text>
      <View ref={viewRef} style={styles.view} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    height: 100,
    width: 100,
    backgroundColor: 'lightblue'
  }
});

export default IncorrectHeightAndroidSolution;