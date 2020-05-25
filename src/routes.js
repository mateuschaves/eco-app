
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import MenuHeaderIcon from '~/components/MenuHeaderIcon';

import Main from '~/pages/Main';

export default function Routes() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Main}
          options={{
            headerTitle: '',
            headerStyle: {
              elevation: 0,
              shadowOffset: 0,
            },
            headerLeft: () => (
              <MenuHeaderIcon />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
