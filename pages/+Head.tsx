// https://vike.dev/Head

import React from 'react';

import logoUrl from '@assets/logoRaketa.svg';

const HeadDefault = () => (
	<>
		<link rel="icon" href={logoUrl} />
		<script
			dangerouslySetInnerHTML={{
				__html: `
              (function() {
			  	const local = localStorage.getItem('theme');			  
				const pref = '(prefers-color-scheme: dark)'
                const system = window.matchMedia(pref).matches ? 'dark' : 'light';
                document.documentElement.classList.add(local || system);
				if (!local) localStorage.setItem('theme', system);
              })();
          `,
			}}
		/>
	</>
);

export default HeadDefault;
