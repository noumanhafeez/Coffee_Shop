// SplashScreen.js
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const splashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to TabNavigator after 2 seconds
      navigation.replace('Tab');
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to MyApp!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0c0f14',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});

export default splashScreen;
