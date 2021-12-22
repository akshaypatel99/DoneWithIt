import { useFormikContext } from 'formik';

import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

export default function FormImagePicker({ name }) {
	const { errors, setFieldValue, touched, values } = useFormikContext();
	const imageUris = values[name];

	function handleAdd(uri) {
		setFieldValue(name, [...imageUris, uri]);
	}
	function handleRemove(uri) {
		setFieldValue(
			name,
			imageUris.filter((imageUri) => imageUri !== uri)
		);
	}

	return (
		<>
			<ImageInputList
				imageUris={imageUris}
				onAddImage={handleAdd}
				onRemoveImage={handleRemove}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}
