import { StyleSheet, View } from 'react-native';
import colors from '../../config/colors';

export default function ListItemSeparator() {
	return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
	separator: {
		height: 1,
		width: '100%',
		backgroundColor: colors.light,
	},
});
