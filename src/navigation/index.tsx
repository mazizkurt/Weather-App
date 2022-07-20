import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {DarkTheme, DefaultTheme} from 'src/styles';
import Intro from 'src/pages/intro';
import Home from 'src/pages/home';
import {setCity, updateCity} from 'src/redux/slices/citySlice';
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
  const bootstrapAsync = async () => {
    var promises = await citys.map(async (data: any, index: number) => {
      return new Promise(async(resolve: any, reject) => {
        await getCurrentWeather(data.currentWeather.coord.lat, data.currentWeather.coord.lon)
          .then((res: any) => {
            dispatch(updateCity({index, data: res.data}));
            resolve();
          })
          .catch((err: any) => {
            reject();
          });
      });
    });
    await Promise.all(promises).then(() => {
      console.log("promises")
      console.log(promises)
      setTimeout(() => {
        setLoading(false);
        
      }, 3000);
    }
    ).catch(() => {
    }
    );
  
  };

  useEffect(() => {
    bootstrapAsync();
  }, [loading]);
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
