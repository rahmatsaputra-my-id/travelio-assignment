import {Colors as ColorsBar} from 'react-native/Libraries/NewAppScreen';
import {Colors} from '../../constants/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ExploreScreen} from '../../screens/ExploreScreen';
import {FavoriteScreen} from '../../screens/FavoriteScreen';
import {Image, View, StatusBar, useColorScheme} from 'react-native';
import {IMAGES} from '../../assets/images';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from '../store';
import {styleProps, styles} from './style';

const Tab = createBottomTabNavigator();
const Navigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Explore'}
      screenOptions={{
        tabBarActiveTintColor: Colors.black,
        headerShown: false,
      }}>
      <Tab.Screen
        name={'Explore'}
        component={ExploreScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image style={styleProps(color).icon} source={IMAGES.icon_search} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              style={styleProps(color).icon}
              source={IMAGES.icon_bookmark_menu}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const Route = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const barStyle = isDarkMode ? 'light-content' : 'dark-content';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? ColorsBar.darker : ColorsBar.lighter,
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle={barStyle}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Provider store={store}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </Provider>
    </View>
  );
};
