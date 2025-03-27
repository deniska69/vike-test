import React from 'react';
import { Button, Div, HStack, Image } from '@parabit/megatizerui';

import logoRaketa from '@assets/logoRaketa.svg';
import logoRaketaText from '@assets/logoRaketaText.svg';

import { ThemeWidgetSwitch } from './ThemeWidgetSwitch';

export const Header = () => (
	<header className="bg-neutral-200 dark:bg-neutral-500 fixed top-0 flex min-h-14 w-full justify-center">
		<Div className="container flex flex-row items-center justify-between px-2 md:!px-14">
			<a href="/">
				<Image
					src={logoRaketa}
					width="20"
					className="mt-1 flex md:hidden"
					alt="Megatizer header logo mobile"
				/>
			</a>

			<a href="/">
				<Image
					src={logoRaketaText}
					width="156"
					className="mt-2 hidden md:flex"
					alt="Megatizer header logo desktop"
				/>
			</a>

			<HStack className="items-center gap-x-3">
				<Button text="Регистрация" />
				<Button text="Вход" variant="ghost" />
				<ThemeWidgetSwitch />
			</HStack>
		</Div>
	</header>
);
