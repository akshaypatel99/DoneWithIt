import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import AppText from './AppText';
import colors from '../config/colors';

export default function Card({
	title,
	subTitle,
	imageUrl,
	onPress,
	thumbnailUrl,
}) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.card}>
				<Image
					uri={imageUrl}
					tint='light'
					style={styles.image}
					preview={{ uri: thumbnailUrl }}
				/>
				<View style={styles.detailsContainer}>
					<AppText style={styles.title} numberOfLines={1}>
						{title}
					</AppText>
					<AppText style={styles.subTitle} numberOfLines={2}>
						{subTitle}
					</AppText>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: colors.white,
		marginBottom: 20,
		overflow: 'hidden',
	},
	detailsContainer: {
		padding: 20,
	},
	image: {
		width: '100%',
		height: 200,
	},
	subTitle: {
		color: colors.secondary,
		fontWeight: 'bold',
	},
	title: {
		marginBottom: 7,
	},
});
