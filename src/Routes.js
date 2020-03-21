import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faUsers,
  faPlayCircle,
  faStore,
  faBell,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

import dashboard from './pages/dashboard';

const stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function SettingsScreen() {
  return (
    <View>
      <Text>Settings!</Text>
    </View>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarLabel: ({color}) => {
            switch (route.name) {
              case 'Home':
                return (
                  <FontAwesomeIcon color={color} icon={faHome} size="22" />
                );
              case 'Groups':
                return (
                  <FontAwesomeIcon color={color} icon={faUsers} size="22" />
                );
              case 'Watch':
                return (
                  <FontAwesomeIcon
                    color={color}
                    icon={faPlayCircle}
                    size="22"
                  />
                );
              case 'MarketPlace':
                return (
                  <FontAwesomeIcon color={color} icon={faStore} size="22" />
                );
              case 'Notification':
                return (
                  <FontAwesomeIcon color={color} icon={faBell} size="22" />
                );
              case 'Menu':
                return (
                  <FontAwesomeIcon color={color} icon={faBars} size="22" />
                );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#3360FF',
          inactiveTintColor: 'gray',
          labelStyle: {
            color: 'tomato',
          },
        }}>
        <Tab.Screen name="Home" component={dashboard} />
        <Tab.Screen name="Groups" component={SettingsScreen} />
        <Tab.Screen name="Watch" component={SettingsScreen} />
        <Tab.Screen name="MarketPlace" component={SettingsScreen} />
        <Tab.Screen name="Notification" component={SettingsScreen} />
        <Tab.Screen name="Menu" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
