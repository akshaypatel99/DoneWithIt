import { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {
	ErrorMessage,
	Form,
	FormField,
	SubmitButton,
} from '../components/forms';
import useApi from '../hooks/useApi';
import ActivityIndicator from '../components/ActivityIndicator';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(6).label('Password'),
});

export default function RegisterScreen() {
	const registerApi = useApi(useApi.register);
	const loginApi = useApi(useApi.login);
	const auth = useAuth();
	const [error, setError] = useState();

	const handleSubmit = async (userInfo) => {
		const result = await registerApi.request(userInfo);

		if (!result.ok) {
			if (result.data) setError(result.data.error);
			else {
				setError('An unexpected error occurred.');
				console.log(result);
			}
			return;
		}

		const { data: authToken } = await loginApi.request(
			userInfo.email,
			userInfo.password
		);
		auth.logIn(authToken);
	};

	return (
		<>
			<ActivityIndicator visible={registerApi.loading || loginApi.loading} />

			<Screen style={styles.container}>
				<Image style={styles.logo} source={require('../assets/logo-red.png')} />

				<Form
					initialValues={{ email: '', password: '' }}
					onSubmit={handleSubmit}
					validationSchema={validationSchema}
				>
					<ErrorMessage error={error} visible={error} />
					<FormField
						autoCapitalize='words'
						autoComplete='name'
						icon='account'
						name='name'
						placeholder='Name'
					/>
					<FormField
						autoCapitalize='none'
						autoCorrect={false}
						icon='email'
						keyboardType='email-address'
						name='email'
						placeholder='Email'
						textContentType='emailAddress'
					/>
					<FormField
						autoCapitalize='none'
						autoCorrect={false}
						icon='lock'
						name='password'
						placeholder='Password'
						secureTextEntry
						textContentType='password'
					/>
					<SubmitButton title='Register' />
				</Form>
			</Screen>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: 'center',
		marginTop: 50,
		marginBottom: 20,
	},
});
