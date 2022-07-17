import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {DarkTheme, DefaultTheme} from 'src/styles';
import Intro from 'src/pages/intro';
import Home from 'src/pages/home';
import {setCity} from 'src/redux/slices/citySlice';
import Loading from 'src/pages/loading';
import {getCurrentWeather} from 'src/services';
const Stack = createNativeStackNavigator();
export default function Navigation() {
  const scheme = useColorScheme();
  const {intro} = useSelector((state: any) => state.intro);
  const {citys} = useSelector((state: any) => state.city);
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();
  // React.useEffect(()=>{
  //   dispatch(setCity([]))
  // },[])
  useEffect(() => {
    var promises = citys.map((data: any, index: number) => {
      return getCurrentWeather(data.lat, data.lon).then(res => {
        citys[index].currentWeather = res.data;
        return citys[index];
      }); 
    });
    Promise.all(promises)
      .then(response => {
        dispatch(setCity(response));
        setTimeout(() => {
          setLoading(false);
          
        }, 3000);
      }) 
      .catch(error => console.log(`Error in executing ${error}`));
  }, []);
  return (
    <NavigationContainer theme={scheme == 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        {!loading ? (
          intro.intro ? (
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
          )
        ) : (
          <Stack.Screen
            name="Loading"
            component={Loading}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
