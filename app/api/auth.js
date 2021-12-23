import client from '../client';

const login = async (email, password) =>
	client.post('/auth/login', { email, password });

export default {
	login,
};
