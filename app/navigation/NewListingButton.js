import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

export default function NewListingButton({ onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name='plus-circle'
					size={40}
					color={colors.white}
				/>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: colors.white,
		borderWidth: 10,
		borderRadius: 40,
		bottom: 20,
		width: 80,
		height: 80,
	},
});
