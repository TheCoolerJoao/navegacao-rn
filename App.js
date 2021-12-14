import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Perfil from './src/pages/Perfil';
import Contato from './src/pages/Contato';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs () {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Home}/>
      <Tab.Screen name="Meu Perfil" component={Perfil}/>
      <Tab.Screen name="Contatos" component={Contato} 
      initialParams={{gerente: 'geraldo', numero: '449238749'}}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home"
          component={Tabs}
          options={{
            title: 'Bem-vindo',
            headerStyle: {
              backgroundColor: '#121212'
            },
            headerTintColor: '#FFF'
          }}
        />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Contato" component={Contato} 
        initialParams={{gerente: 'arthur', numero: '4957823'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}