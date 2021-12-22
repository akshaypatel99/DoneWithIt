import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import useLocation from '../hooks/useLocation';

import {
	Form,
	FormField,
	FormImagePicker,
	FormPicker,
	SubmitButton,
} from '../components/forms';
import CategoryPickerItem from '../components/CategoryPickerItem';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label('Title'),
	price: Yup.number().required().min(1).max(10000).label('Price'),
	description: Yup.string().required().min(5).label('Description'),
	category: Yup.object().required().nullable().label('Category'),
	images: Yup.array().min(1, 'Please select at least one image.'),
});

export default function ListingEditScreen() {
	const [location, error] = useLocation();

	return (
		<Screen style={styles.container}>
			<Form
				initialValues={{
					title: '',
					price: '',
					description: '',
					category: null,
					images: [],
				}}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<FormImagePicker name='images' />
				<FormField maxLength={255} name='title' placeholder='Title' />
				<FormField keyboardType='numeric' name='price' placeholder='Price' />
				<FormPicker
					items={categories}
					name='category'
					numberOfColumns={3}
					PickerItemComponent={CategoryPickerItem}
					placeholder='Category'
				/>
				<FormField
					maxLength={255}
					multiline
					name='description'
					placeholder='Description'
					numberOfLines={3}
				/>
				<SubmitButton title='Post' />
			</Form>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
});

const categories = [
	{
		backgroundColor: '#fc5c65',
		icon: 'floor-lamp',
		label: 'Furniture',
		value: 1,
	},
	{
		backgroundColor: '#fd9644',
		icon: 'car',
		label: 'Cars',
		value: 2,
	},
	{
		backgroundColor: '#fed330',
		icon: 'camera',
		label: 'Cameras',
		value: 3,
	},
	{
		backgroundColor: '#26de81',
		icon: 'cards',
		label: 'Games',
		value: 4,
	},
	{
		backgroundColor: '#2bcbba',
		icon: 'shoe-heel',
		label: 'Clothing',
		value: 5,
	},
	{
		backgroundColor: '#45aaf2',
		icon: 'basketball',
		label: 'Sports',
		value: 6,
	},
	{
		backgroundColor: '#4b7bec',
		icon: 'headphones',
		label: 'Movies & Music',
		value: 7,
	},
	{
		backgroundColor: '#a55eea',
		icon: 'book-open-variant',
		label: 'Books',
		value: 8,
	},
	{
		backgroundColor: '#778ca3',
		icon: 'application',
		label: 'Other',
		value: 9,
	},
];
