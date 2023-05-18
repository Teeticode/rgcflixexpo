/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

import {
  Colors,
  
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeImg from './assets/icons/home.png';
import Account from './pages/Account';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import { store } from './redux/store';


const Stack = createStackNavigator()
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider
      store={store}
    >
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Account' screenOptions={{
        headerShown:false,
        cardStyle:{
          backgroundColor:'white'
        }
        }}>
        <Stack.Screen name='Account' component={Account} />
        <Stack.Screen name='Home' component={Home} />
      
      </Stack.Navigator>
      
    </NavigationContainer>
    </Provider>
    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
