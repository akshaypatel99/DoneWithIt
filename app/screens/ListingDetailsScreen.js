import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import AppText from '../components/AppText';
import { ListItem } from '../components/lists';
import colors from '../config/colors';

export default function ListingDetailsScreen({ route }) {
	const listing = route.params;

	return (
		<View>
			<Image
				uri={listing.images[0].url}
				preview={{ uri: listing.images[0].thumbnailUrl }}
				tint='light'
				style={styles.image}
			/>
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>{listing.title}</AppText>
				<AppText style={styles.price}>£{listing.price}</AppText>
				<View style={styles.userContainer}>
					<ListItem
						image={require('../assets/akshay.jpg')}
						title='Akshay Patel'
						subTitle='5 Listings'
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	detailsContainer: {
		padding: 20,
	},
	image: {
		width: '100%',
		height: 300,
	},
	price: {
		color: colors.secondary,
		fontWeight: 'bold',
		fontSize: 20,
		marginVertical: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: '500',
	},
	userContainer: {
		marginVertical: 40,
	},
});
