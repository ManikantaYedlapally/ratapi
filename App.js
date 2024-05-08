import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet, Dimensions, Linking } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RatWrap from './screens/Ratwrap';
import LoginScreen from './screens/LoginScreen';
import RatItInventory from './screens/RatItInventory';
import PaymentPage from './screens/PaymentPage';
import AataRiceOilsDal from './screens/AataRiceOilsDal';
import MasalaDryFruits from './screens/MasalaDryFruits';
import DairyBreadEgg from './screens/DairyBreadEgg';
import ColdDrinksJuices from './screens/ColdDrinksJuices';
import TeaCoffee from './screens/TeaCoffee';
import BiscuitsCookies from './screens/BiscuitsCookies';
import BathBodyHair from './screens/BathBodyHair';
import ElectronicsAccessories from './screens/ElectronicsAccessories';
import GroomingEssentials from './screens/GroomingEssentials';
import HygieneWellness from './screens/HygieneWellness';
import BabyCare from './screens/BabyCare';
import CleaningEssentials from './screens/CleaningEssentials';
import HomeNeeds from './screens/HomeNeeds';
import PackedFoods from './screens/PackedFoods';
import ChipsSnacks from './screens/ChipsSnacks';


import VegFruList from './screens/VegFruList';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const screenWidth = Dimensions.get('window').width;

const HomeScreen = ({ navigation, route }) => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const isLoggedIn = route.params?.isLoggedIn || false;

  const banners = [
   
    require('./assets/slider1.png'),
    require('./assets/banner6.png'),
    require('./assets/slider2.png'),
    require('./assets/slider3.png'),
    require('./assets/slider4.png')
 
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex(prevIndex => (prevIndex + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const openRatItPage = () => {
    Linking.openURL('https://ratit.ratride.in/');
  };

  const openGroceryPage = () => {
    Linking.openURL('https://ratit.ratride.in/');
  };

  const openRatWrapPage = () => {
    navigation.navigate('RatWrap', { isLoggedIn});
  };

  const handleLogout = () => {
    // Logic for logout, navigate to the Login screen
    navigation.navigate('Login');
  };

  const RatItInventory = () => {
    navigation.navigate('RatItInventory');
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
      <View style={styles.sliderContainer}>
          <Image source={require('./assets/mb1.png')} style={styles.slider} />
        </View>
        <View style={styles.bannerContainer}>
          <Image source={banners[currentBannerIndex]} style={styles.banner} />
        </View>
        <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card} onPress={openRatItPage}>
            <Image source={require('./assets/ratit.png')} style={styles.cardImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={openRatWrapPage}>
            <Image source={require('./assets/wrapit.png')} style={styles.cardImage} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={RatItInventory} style={styles.touchableOpacityLogout}>
              <Text style={styles.navLogoutText}>RatItInventory</Text>
            </TouchableOpacity>
        
        <View style={styles.navrbarnew}>
          <TouchableOpacity onPress={openGroceryPage}>
            <View style={styles.navIcon}>
              <Image source={require('./assets/groceryicon.png')} style={styles.grocerylogo} />
              <Text style={styles.navGroceryText}>Grocery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('RatWrap', { isLoggedIn })} style={styles.touchableOpacity}>
            <View style={styles.navIcon}>
              <Image source={require('./assets/packageicon.png')} style={styles.packageicon} />
              <Text style={styles.navPackageText}>Package</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/+918500100569?text=Hi%20there!%20I%20hope%20you%27re%20doing%20well.')} style={styles.touchableOpacitywa}>
            <View style={styles.navIcon}>
              <Image source={require('./assets/whatsappicon.png')} style={styles.whatsappicon} />
              <Text style={styles.navWhatsAppText}>WhatsApp</Text>
            </View>
          </TouchableOpacity>
          {isLoggedIn && (
            <TouchableOpacity onPress={handleLogout} style={styles.touchableOpacityLogout}>
              <Text style={styles.navLogoutText}>Logout</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  touchableOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 120,
  },
  touchableOpacitywa: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 140,
  },
  touchableOpacityLogout: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 140,
  },
  navGroceryText: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
    left: 20,
  },
  navPackageText: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
    left: 2,
  },
  navWhatsAppText: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
    left: -52,
  },
  navLogoutText: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
    left: -45,
  },
  whatsappicon: {
    width: 39,
    height: 39,
    left: -40,
  },
  packageicon: {
    width: 40,
    height: 40,
    left: 7,
  },
  grocerylogo: {
    width: 42,
    height: 40,
    left: 23,
  },
  navrbarnew: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    shadowColor: '#f2f2f2',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    paddingVertical: 17,
    paddingHorizontal: 15,
    marginTop: 30,
  },
  sliderContainer: {
    alignItems: 'center',
    marginTop: -420,
  },
  slider: {
    width: screenWidth * 0.99,
    resizeMode: 'contain',
  },
  bannerContainer: {
    marginTop: -450,
    alignItems: 'center',
  },
  banner: {
    width: screenWidth * 0.95,
    height: 190,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 50
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 3,
    marginTop: 30,
  },
  card: {
    width: 181,
    height: 145,
    borderRadius: 10,
    marginHorizontal: 11,
    // marginTop: 365
  },
  cardImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation, route }) => ({
            headerTitle: props => <Image source={require('./assets/logoname.png')} style={{ width: 70, height: 40 }} />,
            headerRight: () => {
              if (!route.params?.isLoggedIn) {
                return (
                  <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    
                    <Text style={{ 
                      backgroundColor: 'white',
                      paddingVertical: 5,
                      paddingHorizontal: 20,
                      borderRadius: 30,
                      marginRight: 20, 
                      color: 'black',
                      fontSize: 15,
                      fontWeight: 'semibold',
                      borderWidth: 1.5,
                      borderColor: '#FFD700',
                      marginTop: 10,
                    }}>Login</Text>
                    
                  </TouchableOpacity>
                );
              } else {
                return (
                  <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Text style={{ backgroundColor: 'white', // Blue color
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginRight: 20, 
    color: 'black', // White color
    fontSize: 15,
    fontWeight: 'semibold',
    borderWidth: 1.5,
    borderColor: '#FFD700',
    marginTop: 10, }}>Logout</Text>
                </TouchableOpacity>
                ); // Hide login button if user is logged in
              }
            },
           
          })}
          initialParams={{ isLoggedIn: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="RatWrap" component={RatWrap} />
        <Stack.Screen name="RatItInventory" component={RatItInventory} />
        <Stack.Screen name="VegFruList" component={VegFruList} />
        <Stack.Screen name="PaymentPage" component={PaymentPage} />
        <Stack.Screen name="AataRiceOilsDal" component={AataRiceOilsDal} />
        <Stack.Screen name="MasalaDryFruits" component={MasalaDryFruits} />
        <Stack.Screen name="DairyBreadEgg" component={DairyBreadEgg} />
        <Stack.Screen name="ColdDrinksJuices" component={ColdDrinksJuices} />
        <Stack.Screen name="TeaCoffee" component={TeaCoffee} />
        <Stack.Screen name="ChipsSnacks" component={ChipsSnacks} />
        <Stack.Screen name="BiscuitsCookies" component={BiscuitsCookies} />
        <Stack.Screen name="BathBodyHair" component={BathBodyHair} />
        <Stack.Screen name="ElectronicsAccessories" component={ElectronicsAccessories} />
        <Stack.Screen name="GroomingEssentials" component={GroomingEssentials} />
        <Stack.Screen name="HygieneWellness" component={HygieneWellness} />
        <Stack.Screen name="BabyCare" component={BabyCare} />
        <Stack.Screen name="CleaningEssentials" component={CleaningEssentials} />
        <Stack.Screen name="HomeNeeds" component={HomeNeeds} />
        <Stack.Screen name="PackedFoods" component={PackedFoods} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
