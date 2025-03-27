import './index.css';

import React, { ReactNode } from 'react';
import { Div } from '@parabit/megatizerui';

import { Header } from '@components';

// import logoUrl from '@assets/logoRaketa.svg';

// import { Link } from '../components/Link.js';

interface ILayoutDefault {
	children: ReactNode;
}

const LayoutDefault = (props: ILayoutDefault) => (
	<Div className="flex min-h-screen flex-col items-center dev">
		<Header />
		LayoutDefault
		{/* <Sidebar>
			<Logo />
			<Link href="/">Welcome</Link>
			<Link href="/todo">Todo</Link>
			<Link href="/star-wars">Data Fetching</Link>
			{''}
		</Sidebar> */}
		{/* <Content>{props.children}</Content> */}
		<Div className="container flex h-full flex-col px-2 pt-20 md:px-14">{props.children}</Div>
	</Div>
);
export default LayoutDefault;

// function Sidebar({ children }: { children: React.ReactNode }) {
// 	return (
// 		<div id="sidebar" className={'p-5 flex flex-col shrink-0 border-r-2 border-r-gray-200'}>
// 			{children}
// 		</div>
// 	);
// }

// function Content({ children }: { children: React.ReactNode }) {
// 	return (
// 		<div id="page-container">
// 			<div id="page-content" className={'p-5 pb-12 min-h-screen'}>
// 				{children}
// 			</div>
// 		</div>
// 	);
// }

// function Logo() {
// 	return (
// 		<div className={'p-5 mb-2'}>
// 			<a href="/">
// 				<img src={logoUrl} height={64} width={64} alt="logo" />
// 			</a>
// 		</div>
// 	);
// }
