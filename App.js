import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Button,
	Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import AppNavigator from './app/navigation/AppNavigator';

import colors from './app/config/colors';
import navigationTheme from './app/navigation/navigationTheme';

export default function App() {
	return (
		<NavigationContainer theme={navigationTheme}>
			<AppNavigator />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});
