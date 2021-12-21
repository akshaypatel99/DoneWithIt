import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

export default function AppFormPicker({
	items,
	name,
	numberOfColumns = 1,
	PickerItemComponent,
	placeholder,
}) {
	const { errors, setFieldValue, touched, values } = useFormikContext();
	return (
		<>
			<AppPicker
				items={items}
				numberOfColumns={numberOfColumns}
				onSelectItem={(item) => setFieldValue(name, items)}
				PickerItemComponent={PickerItemComponent}
				placeholder={placeholder}
				selectedItem={values[name]}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
}
