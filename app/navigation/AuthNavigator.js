import { createStackNavigator } from 'react-navigation';

import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';

const Stack = createStackNavigator();

export default function AuthNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Welcome'
				component={WelcomeScreen}
				screenOptions={{ presentation: 'modal', headerShown: false }}
			/>
			<Stack.Screen name='Login' component={LoginScreen} />
			<Stack.Screen name='Register' component={RegisterScreen} />
		</Stack.Navigator>
	);
}
