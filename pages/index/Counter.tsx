import React, { useState } from 'react';
import { Button } from '@parabit/megatizerui';

export function Counter() {
	const [count, setCount] = useState(0);

	return <Button onClick={() => setCount((count) => count + 1)}>Counter {count}</Button>;
}
