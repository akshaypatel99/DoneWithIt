import { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import {
	ListItem,
	ListItemSeparator,
	ListItemDeleteAction,
} from '../components/lists';

import Screen from '../components/Screen';

const initialMessages = [
	{
		id: 1,
		title: 'Lorem ipsum dolor sit amet',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat ab, officia quos voluptatem error eos.',
		image: require('../assets/akshay.jpg'),
	},
	{
		id: 2,
		title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt beatae maxime itaque earum quod repellat eveniet minima aspernatur!',
		image: require('../assets/akshay.jpg'),
	},
];

export default function MessagesScreen() {
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	function handleDelete(message) {
		setMessages(messages.filter((m) => m.id !== message.id));
	}

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						onPress={() => console.log('Message selected', item)}
						renderRightActions={() => (
							<ListItemDeleteAction onPress={() => handleDelete(item)} />
						)}
						ItemSeparatorComponent={ListItemSeparator}
						refreshing={refreshing}
						onRefresh={() => {
							setMessages([
								{
									id: 2,
									title: 'T2',
									description: 'D2',
									image: require('../assets/akshay.jpg'),
								},
							]);
						}}
					/>
				)}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({});
