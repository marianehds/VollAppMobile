import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import Routes from '@/src/Routes';
import { SecaoProvider } from '@/src/SecaoContext';
import { THEMES } from '@/src/styles/themes';
import { NavigationContainer } from '@react-navigation/native';

export default function HomeScreen() {
  return (
    <NavigationContainer independent={true}>
      <NativeBaseProvider theme={THEMES}>
        <StatusBar backgroundColor={THEMES.colors.blue[800]}/>
        <SecaoProvider>
          <Routes />
        </SecaoProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
