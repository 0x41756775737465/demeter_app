import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SignUp from '../views/SignUp';
import React from 'react';
import Auth from '../views/Auth';

const Tab = createBottomTabNavigator();

export const Default: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="SignIn"
        component={Auth}
        options={{
          tabBarLabel: 'SignIn',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SignUp"
        component={SignUp}
        options={{
          tabBarLabel: 'SignUp',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
