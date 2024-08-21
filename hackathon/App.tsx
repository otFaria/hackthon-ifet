import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/navigation/MyStack';
import { UserProvider } from './src/auth/UserContext'; // Importe o UserProvider

export default function App() {
  return (
    <UserProvider> 
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </UserProvider>
  );
}
