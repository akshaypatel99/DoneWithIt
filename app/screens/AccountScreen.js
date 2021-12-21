import { StyleSheet, FlatList, View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import Icon from '../components/Icon';
import colors from '../config/colors';

export default function AccountScreen() {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title='Akshay Patel'
					subTitle='akshay@akshaypatel.dev'
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
						/>
					)}
				/>
			</View>
			<ListItem
				title='Logout'
				IconComponent={<Icon name='logout' backgroundColor={colors.yellow} />}
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
	},
];
