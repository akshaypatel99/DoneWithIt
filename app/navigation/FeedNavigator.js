import { createStackNavigator } from '@react-navigation/stack';
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createStackNavigator();

export default function FeedNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{ presentation: 'modal', headerShown: false }}
		>
			<Stack.Screen name='Listings' component={ListingsScreen} />
			<Stack.Screen name='ListingDetails' component={ListingDetailsScreen} />
		</Stack.Navigator>
	);
}
