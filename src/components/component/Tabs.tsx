import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useContext } from 'react';
import Home from '../views/Home';
import Auth from '../views/Auth';
import CameraPage from '../views/CameraPage';
import Profile from '../views/Profile';
import { userContext } from '../../utils/context';

const Tab = createBottomTabNavigator();

export const MyTabs: React.FC = () => {
  const { currentUser } = useContext(userContext);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="email" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Meal"
        component={Auth}
        options={{
          tabBarLabel: 'Meal',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Aliment"
        component={Auth}
        options={{
          tabBarLabel: 'Aliment',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name={'bell'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Receipe"
        component={Auth}
        options={{
          tabBarLabel: 'Receipe',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name={'bell'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CameraPage"
        component={CameraPage}
        options={{
          tabBarLabel: 'CameraPage',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name={'bell'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={() => <Profile user={currentUser} />}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name={'bell'} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
