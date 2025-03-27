import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { Switch } from '@parabit/megatizerui';

import { isClient } from '@helpers';

export const ThemeWidgetSwitch = () => {
	const [value, setValue] = useState(false);

	useEffect(() => {
		handleGetInitValue();
	}, []);

	const handleGetInitValue = () => {
		if (!isClient()) return;
		const isDark = document.documentElement.classList.contains('dark');
		setValue(isDark);
	};

	const handleChange = (val: boolean) => {
		setValue(val);

		if (val) {
			document.documentElement.classList.remove('light');
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('light');
		}

		localStorage.setItem('theme', val ? 'dark' : 'light');
	};

	return (
		<Switch
			value={!!value}
			onChange={handleChange}
			iconChecked={<MoonIcon className="w-3 text-white" />}
			iconUnChecked={<SunIcon className="text-primary w-3" />}
		/>
	);
};
