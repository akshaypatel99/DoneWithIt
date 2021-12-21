import { Platform, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

export default function AppText({ children, style }) {
	return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
	text: {
		color: colors.black,
		...Platform.select({
			ios: {
				fontSize: 20,
				fontFamily: 'Avenir',
			},
			android: {
				fontSize: 18,
				fontFamily: 'Roboto',
			},
		}),
	},
});
