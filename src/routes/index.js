import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Wallet from '../pages/Wallet';
import Pay from '../pages/Pay';

import PayButton from '../components/PayButton';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard',
  },
  Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline',
  },
  Settings: {
    lib: AntDesign,
    name: 'setting',
  },
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Pay') {
              return <PayButton />;
            }
            const { lib: Icon, name } = icons[route.name];

            return <Icon name={name} size={size} color={color} />
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: '#131418',
            borderTopColor: 'rgba(255, 255, 255, 0.2)',
          },
          activeTintColor: '#fff',
          inactiveTintColor: '#92929c',
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Início' }} 
        />
        <Tab.Screen 
          name="Wallet" 
          component={Wallet} 
          options={{ title: 'Carteira' }}
        />
        <Tab.Screen 
          name="Pay" 
          component={Pay} 
          options={{ title: '' }}
        />
        <Tab.Screen 
          name="Notifications" 
          component={Pay} 
          options={{ title: 'Notificações' }}
        />
        <Tab.Screen 
          name="Settings" 
          component={Pay} 
          options={{ title: 'Ajustes' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}