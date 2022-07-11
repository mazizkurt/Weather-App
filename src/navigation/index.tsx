import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';
import {useSelector} from 'react-redux';
import {DarkTheme, DefaultTheme} from 'src/styles';
import Intro from 'src/pages/intro';
import Home from 'src/pages/home';
const Stack = createNativeStackNavigator();
export default function Navigation() {
  const scheme = useColorScheme();
  const {intro} = useSelector((state: any) => state.intro);
  console.log(intro);
  return (
    <NavigationContainer theme={scheme == 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        {intro ? (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Intro"
            component={Intro}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
