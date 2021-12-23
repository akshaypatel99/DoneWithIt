import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const key = 'authToken';

const storeToken = async (token) => {
	try {
		await SecureStore.setItemAsync(key, token);
	} catch (error) {
		console.log('Error storing auth token', error);
	}
};

const getToken = async () => {
	try {
		return await SecureStore.getItemAsync(key);
	} catch (error) {
		console.log('Error fetching auth token', error);
	}
};

const getUser = async () => {
	const token = await getToken();
	if (!token) return null;
	return jwtDecode(token);
};

const removeToken = async () => {
	try {
		await SecureStore.deleteItemAsync(key);
	} catch (error) {
		console.log('Error deleting auth token', error);
	}
};

export default { storeToken, getToken, getUser, removeToken };
