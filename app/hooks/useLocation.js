import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default function useLocation() {
	const [location, setLocation] = useState();
	const [error, setError] = useState();

	useEffect(() => {
		async function getLocation() {
			try {
				const { granted } = await Location.requestForegroundPermissionsAsync();
				if (!granted) return;

				const {
					coords: { latitude, longitude },
				} = await Location.getLastKnownPositionAsync({
					enableHighAccuracy: true,
				});

				setLocation({ latitude, longitude });
			} catch (error) {
				setError(error);
			}
		}

		getLocation();
	}, []);

	return [location, error];
}
