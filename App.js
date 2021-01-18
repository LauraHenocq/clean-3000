import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { LogoTitle } from './src/LogoTitle';
import { Home } from './src/Home';
import { Notice } from './src/Notice';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          title: 'Clean 3000',
          headerStyle: {
              backgroundColor: '#3d3d33',
              height:50
          },
          headerTintColor: '#5cba47',
          headerTitleStyle: {
              fontWeight: 'bold',
          },
          headerTitleAlign:"center"
        }}>

          <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerTitle: () => <LogoTitle/>
          }}
          />

          <Stack.Screen 
          name="Notice" 
          component={Notice}
          options={{
            headerTitle: 'Avis de passage',
            headerBackTitle:"Acceuil"
          }}
          />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
