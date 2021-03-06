import { StyleSheet, FlatList, View } from 'react-native';
import { ListItem, ListItemSeparator } from '../components/lists/';
import Screen from '../components/Screen';
import Icon from '../components/Icon';
import colors from '../config/colors';
import routes from '../navigation/routes';
import useAuth from '../auth/useAuth';

export default function AccountScreen({ navigation }) {
	const { user, logOut } = useAuth();
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title={user.name}
					subTitle={user.email}
					image={require('../assets/akshay.jpg')}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					ItemSeparatorComponent={ListItemSeparator}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
							onPress={() => navigation.navigate(item.targetScreen)}
						/>
					)}
				/>
			</View>
			<ListItem
				title='Logout'
				IconComponent={<Icon name='logout' backgroundColor={colors.yellow} />}
				onPress={() => logOut()}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
	},
	container: {
		marginVertical: 20,
	},
});

const menuItems = [
	{
		title: 'My Listings',
		icon: {
			name: 'format-list-bulleted',
			backgroundColor: colors.primary,
		},
	},
	{
		title: 'My Messages',
		icon: {
			name: 'email',
			backgroundColor: colors.secondary,
		},
		targetScreen: routes.MESSAGES,
	},
];
