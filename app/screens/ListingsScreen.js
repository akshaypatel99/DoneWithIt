import { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import listingsApi from '../api/listings';
import useApi from '../hooks/useApi';

export default function ListingsScreen({ navigation }) {
	const getListingsApi = useApi(listingsApi.getListings);

	useEffect(() => {
		getListingsApi.request();
	}, []);

	return (
		<>
			<ActivityIndicator visible={getListingsApi.loading} />

			<Screen style={styles.screen}>
				{getListingsApi.error && (
					<>
						<AppText>Couldn't retrieve the listings</AppText>
						<AppButton title='Retry' onPress={getListingsApi.request} />
					</>
				)}
				<FlatList
					data={getListingsApi.data}
					keyExtractor={(listing) => listing.id.toString()}
					renderItem={({ item }) => (
						<Card
							title={item.title}
							subTitle={'£' + item.price}
							imageUrl={item.images[0].url}
							thumbnailUrl={item.images[0].thumbnailUrl}
							onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
						/>
					)}
				/>
			</Screen>
		</>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 20,
		backgroundColor: colors.light,
	},
});
